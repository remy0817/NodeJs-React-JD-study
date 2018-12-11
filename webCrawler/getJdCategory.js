/**
 * @authors remy
 * @creatTime 2018-12-10 17:27:01
 * @description 抓取JD分类数据
 * @version 0.0.1
 */

// https://so.m.jd.com/webportal/channel/m_category

const http = require('request');
const fs = require('mz/fs');

const url = 'https://so.m.jd.com/webportal/channel/m_category';

http.get(url, (error, res, body) => {
  const result = body.match(/\<script\>\s*window\.bigpipe\.setData\([\S\s]*\}\)\;\s*\<\/script\>/);
  let content = '';
  if(!!result){
    content = result[0];
    content = content.replace(/\<script\>\s*window\.bigpipe\.setData\(\"[A-Za-z0-9]*\"\,/, '')
              .replace(/\)\;\s*\<\/script\>/, '')
              .replace(/\'/g, '')
              .replace(/\"url\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"ptag\"\:\"[^\"]*\"\,/g, '')
              .replace(/\,\"extInfo1\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"extInfo2\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"label\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"pattern\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"customDoc\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"catId\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"catName\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"labelStartTime\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"labelEndTime\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"patternStartTime\"\:\"[^\"]*\"\,/g, '')
              .replace(/\"patternEndTime\"\:\"[^\"]*\"/g, '')
              .replace(/\\x2f/g, '/')
              .replace(/\\x26/g, '&');
    // const result2 = content.match(/\"keyword\"\:\"[^\"]*\"\,\"imageUrl\"\:\"[^\"]*\"/g);
    // result2 && console.log(result2.length)
    content = JSON.parse(content);
    content = content.json.keywordAreas;
    content = JSON.stringify(content);
    if(content){
      fs.writeFile('jdCategoryData.txt', content, err => {
        if(err){
          return console.log(err);
        }
        console.log('success');
      })
    }
  }else{
    console.log('failed');
  }
});