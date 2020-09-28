import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import keys from "../config/keys"

export default new WooCommerceRestApi({
  url: "https://woocommerce.maktabsharif.ir/",
  consumerKey: "ck_cb1372a12fe30fe085a63f531dc075930851e98c",
  consumerSecret: "cs_2c3f963e51216d49b5850cefcd63961eef42d093",
  version: "wc/v3"
})