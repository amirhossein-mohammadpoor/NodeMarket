import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import keys from "../config/keys"

export default new WooCommerceRestApi({
  url: keys.URL,
  consumerKey: keys.CONSUMER_KEY,
  consumerSecret: keys.CONSUMER_SECRET,
  version: "wc/v3"
})