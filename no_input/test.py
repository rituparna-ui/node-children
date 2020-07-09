import sys
import json
import requests
url = "http://yerkee.com/api/fortune/wisdom"
r = requests.get(url)
data = r.json()
resp={
        "Response":200,
        "Message":"Hello from py",
        "Data":data
        }
print(json.dumps(resp))
sys.stdout.flush()
