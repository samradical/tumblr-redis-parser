const { forIn, each } = require('lodash')
const API = (() => {

  /*
    eg: title
  */
  //#class:<type>
  const _getClassType = (clazs)=>{
    if(!clazs){
      return ""
    }else{
      return clazs.split(":")[1]
    }
  }


  const _extractProjectName = (tag => (tag.split(":")[0]))
  const _extractProjectPage = (tag => (tag.split(":")[1]))
  const _extractProjectOrder = (tag => (parseInt(tag.split(":")[2], 10)))

  function posts(redisReponse) {
    //type: text, video, image...
    let parsed = {}
    Object.keys(redisReponse).forEach(type => {
      parsed[type] = JSON.parse(redisReponse[type])
    })
    return parsed
  }

  function getProjects(parsedData) {
    let _projects = {}
    forIn(parsedData, (postType, key) => {

      //latest should be at the bottom, can specify order

      each(postType, post => {

        //only first tag, page info here
        let _idTag = post.tags[0]
        //class info
        let _className = _getClassType(post.tags[1])
        post.className = _className

        if (_idTag) {

          let _name = _extractProjectName(_idTag)
          let _page = _extractProjectPage(_idTag)
          let _order = _extractProjectOrder(_idTag)
          /*
      order doesnt work
          */


          _projects[_name] = _projects[_name] || {}
          _projects[_name][_page] = _projects[_name][_page] || []

          //end
          _order = isNaN(_order) ? _projects[_name][_page].length : _order
          console.log(_name, _page, _order);
          _projects[_name][_page][_order] = post
          //_projects[_name][_page].splice(_order, 0, post)
        }
      })
    })

    return _projects
  }

  return {
    posts: posts,
    getProjects: getProjects
  }

})()


module.exports = API
