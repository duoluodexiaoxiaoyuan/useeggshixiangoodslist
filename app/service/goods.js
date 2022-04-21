const { Service } = require("egg");

class GoodsService extends Service {
  async findGoods(keyword) {
    const client = this.app.mysql;
    const sql = "select id,name,price,imgurl from goods";
    if (!keyword) {
      return await client.query(sql);
    } else {
      return await client.query(`${sql} where name like ?`, [`%${keyword}%`]);
    }
  }
}

module.exports = GoodsService;
