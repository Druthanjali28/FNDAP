from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import requests
import numpy as np

app = Flask(__name__)
CORS(app)

tfidf_vectorizer = joblib.load('tfidf_vectorizer.pkl')
model = joblib.load('fake_news_model.pkl')

@app.route('/test')
def test():
    return jsonify({
        'message': ' success'
    })


def syspredict(message):
    vectorized = tfidf_vectorizer.transform([message])
    predicted = model.predict(vectorized)
    print("predicted data:",predicted)
    return predicted

@app.route('/getArticles',methods=['POST'])
def get_articles():
     # api call to fetch the news
    API_KEY = '29f8e3c1-573f-4fe8-94ef-593b9dafb04a'
    url = "https://eventregistry.org/api/v1/article/getArticles"
    params = {
        "apiKey": API_KEY,
        "keyword": "",
        "lang": "eng",
        "sortBy": "rel",
        "articlesCount": 50,
        }
    response = requests.get(url, params=params)
    data = response.json()
    articles = data['articles']['results']
    # print(articles)
    # sentiments = lambda articles: list(map(lambda x: syspredict(x['body']), articles))
    sentiments = []
    for article in articles:
        res = syspredict(article['body']).tolist()
        print('res:',res)
        sentiments.append(res)
    sentiments = np.array([sentiments]).flatten().tolist()
    print("sents:",sentiments)
    return jsonify({'articles':articles,'sentiments':sentiments})


@app.route('/recommended',methods=['POST'])
def recommended():
    API_KEY = '29f8e3c1-573f-4fe8-94ef-593b9dafb04a'
    url = "https://eventregistry.org/api/v1/article/getArticles"
    params = {
        "apiKey": API_KEY,
        "keyword": "India",
        "lang": "eng",
        "sortBy": "rel",
        "articlesCount": 15
        }
    response = requests.get(url, params=params)
    data = response.json()
    articles = data['articles']['results']
    recommended = []
    for article in articles:
        res = syspredict(article['body']).tolist()
        if res[0] == 0:
            recommended.append(article)
    
    return jsonify({'recommended':recommended})

@app.route('/search',methods=['POST'])
def search():
    data = request.get_json()
    print(data['searchText'])
    API_KEY = '29f8e3c1-573f-4fe8-94ef-593b9dafb04a'
    url = "https://eventregistry.org/api/v1/article/getArticles"
    params = {
        "apiKey": API_KEY,
        "keyword": data['searchText'],
        "lang": "eng",
        "sortBy": "rel",
        "articlesCount": 15
        }
    response = requests.get(url, params=params)
    data = response.json()
    articles = data['articles']['results']
    sentiments = []
    for article in articles:
        res = syspredict(article['body']).tolist()
        print('res:',res)
        sentiments.append(res)
    sentiments = np.array([sentiments]).flatten().tolist()
    print("sents:",sentiments)
    return jsonify({'articles':articles,'sentiments':sentiments})

   
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # print()
    message = data['message']
    vectorized = tfidf_vectorizer.transform([message])
    predicted = model.predict(vectorized)
    print("predicted data:",predicted)
    # print(vectorized)
    return jsonify({
        # 'message' : vectorized
    })

if __name__=="__main__":
    app.run(debug=True)