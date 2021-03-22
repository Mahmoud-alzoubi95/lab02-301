'use strict';

function Animals(animals) {
   
    this.image_url = animals.image_url;
    this.title = animals.title;
    this.description = animals.description;
    this.keyword = animals.keyword;
    this.horns = animals.horns;

  }



  Animals.prototype.render = function () {
    let containerPerson = $('.photo-template').clone();
    // console.log(containerPerson.find('h2'));
    containerPerson.find('h2').text(this.title);
    containerPerson.find('img').attr('src', `${this.image_url}`);
    containerPerson.find('p').text(this.description);
    
    containerPerson.removeClass('photo-template');
    containerPerson.attr("class", this.keyword);
    $('main').append(containerPerson);

}




  const ajaxData = {
    method: "get",
    dataType: "json",
  };
  
  $.ajax("data/page-1.json", ajaxData).then((data) => {
    data.forEach((animals) => {
      let titleObject = new Animals(animals);
  console.log(titleObject);
      // dogObject.renderManually();
      titleObject.render();
    });
  });