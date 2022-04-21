const { Controller } = require("egg");

class GoodsController extends Controller {
  async goodsList() {
    const { ctx, service } = this;
    const keyword = ctx.query.keyword;
    const goods = await service.goods.findGoods(keyword);
    ctx.body = goods;
  }
}

module.exports = GoodsController;
