import axios from 'axios'

export default axios.create({
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            Authorization: 'Bearer 0lqrfAeiXQ7hXCgmT0Sg3O7yUw12kR-qiBVsQMEd-8ysJaraXbr2vICdBHW2mIn_pF5Du7h_VJVcPeU3PxZApwKdK1mTNGxJIYD8U7Hb-pCge1nl3ySOvImsxwLHXnYx'
        }
    }
)
