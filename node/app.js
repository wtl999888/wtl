const mysql = require('mysql');
const express = require('express');
// 2.引入body-parser包，用来获取post的传参
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))
// ---------------------------------------------------------------------配置
const conn = mysql.createConnection({
    host: '111.67.192.114',
    user: 'sfydb_6325989',
    password: 'Wtl6688123',
    database: 'sfydb_6325989'
});
conn.connect();
// --------------------------------------------------------------------连接数据库
//增
app.post('/post', (req, res) => {
    console.log(req.body)//{}
    console.log(res.body)//undefind
    // -------- 添加数据 ----------
    const user = {
        name: '000',
        password: '000'
    }
    const sql2 = `insert into wtl(name, password) values ('${user.name}','${user.password}')`
    conn.query(sql2, (err, result) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(result)
        }
    })
})
//删
app.post('/del', (req, res) => {
    // const sql2 = `UPDATE wtl SET ? WHERE id =?`
    const sql2 = `DELETE FROM wtl WHERE id=13`
    conn.query(sql2, (err, result) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(result)
            console.log(result)
        }
    })
})
//改
app.post('/put', (req, res) => {
    // const sql2 = `UPDATE wtl SET ? WHERE id =?`
    const sql2 = `update  wtl set id=99 where id=13`
    conn.query(sql2, (err, result) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(result)
            console.log(result)
        }
    })
})
//查全部
app.post('/getall', (req, res) => {
    let sql = 'SELECT * FROM `wtl`';
    conn.query(sql, (err, results, fields) => {
        if (err) throw err;;
        req.json(results)
    });
    conn.end();
})
// 查询一个
app.post('/get', (req, res) => {
    let sql = `SELECT * from wtl WHERE id=20`;
    conn.query(sql, (err, results, fields) => {
        if (err) throw err;;
        res.json(results)
    });
    conn.end();
})
app.listen(8081, () => {
    console.log(8080);
});