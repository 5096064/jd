//nodejs专用,手机用boxjs填写
//cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息
//TG群:https://t.me/joinchat/wH4Ks3mT6mxiMDg1

let cookies = [
  'deviceid_pdj_jd=H5_DEV_911AFAFB-3C64-4A29-B4C8-FEF226A8E42C;o2o_m_h5_sid=d9385c2d-1a24-4f66-89ba-24c696358f51;',
  'deviceid_pdj_jd=H5_DEV_3F3CABDA-55BB-48CE-9F37-58D5FA2FEACE;o2o_m_h5_sid=bb780f1e-eb2d-45dc-943b-8de27947df0b;',
  'deviceid_pdj_jd=H5_DEV_6563288B-DEC0-44B8-83C1-613267B67EF6;o2o_m_h5_sid=4ef4598d-89e3-49cd-9c99-14a254a7bdfa;',
  'deviceid_pdj_jd=H5_DEV_72661F38-BA7C-464F-A7FF-4451C25F4BD2;o2o_m_h5_sid=aa779330-9226-48bf-be74-ae3443a520e1;',
  'deviceid_pdj_jd=H5_DEV_66240FD8-1C8B-4C06-8037-F6C6400552BF;o2o_m_h5_sid=c34fa479-888a-4c86-84e4-d9549dccb242;',
  'deviceid_pdj_jd=H5_DEV_988F0B57-4131-430D-BF62-6A0AA7AC9958;o2o_m_h5_sid=c582fcb4-eafd-4d12-9860-bf0b1d062caa;',
]
// 判断环境变量里面是否有京东ck
if (process.env.JDDJ_COOKIE) {
  if (process.env.JDDJ_COOKIE.indexOf(',') > -1) {
    cookies = process.env.JDDJ_COOKIE.split(',')
  } else if (process.env.JDDJ_COOKIE.indexOf('&') > -1) {
    cookies = process.env.JDDJ_COOKIE.split('&')
  } else if (process.env.JDDJ_COOKIE.indexOf('\n') > -1) {
    cookies = process.env.JDDJ_COOKIE.split('\n')
  } else {
    cookies = [process.env.JDDJ_COOKIE]
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`)
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0)
  })()
}
cookies = [...new Set(cookies.filter(item => !!item))]
console.log(`\n====================共${cookies.length}个京东账号Cookie=========\n`)

module.exports = cookies
