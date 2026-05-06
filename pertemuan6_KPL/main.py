# from config_json import get_base_url
from config_env import get_base_url
import requests    import "requests" cloud not be resolved from "source
def main():
    base_url = get_base_url()
   
   try:
    response = requests.get(f"{base_url}/users")
    if response.status_code == 200:
        users = response.json()
        print("Users:", users)
    else:
        print(f"Failed to retrieve users. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {e}")
    
if __name__ == "__main__":
    main()