const data =[
    {
      id:1,
      title:"Musobaqa",
      date:"19-aprel, 2023",
      view:119,
      text:"16-aprel kuni «Najot Ta'lim»da SMM menejerlari uchun story management",
      end:"«SMM musobaqasi» bo'lib o'tdi"  
    },
    {
        id:2,
        title:"Master-klass",
        date:"19-aprel, 2023",
        view:92,
        text:"Farg'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimo",
        end:"«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass"  
    },
    {
        id:3,
        title:"Musobaqa",
        date:"19-aprel, 2023",
        view:109,
        text:"SMM-menejer va Grafik dizaynerlar o'rtasidagi «Marketing Team» jamoaviy",
        end:"«Marketing Team» musobaqasi g'oliblari e'lon qilindi"  
    },
    {
        id:4,
        title:"Musobaqa",
        date:"19-aprel, 2023",
        view:109,
        text:"2-aprel kuni bo'lib o'tgan dasturlash bo'yicha «Algoritmlash» musobaqasi",
        end:"Dasturchilar o'rtasida «Algoritmlash» musobaqasi"  
    },
    {
        id:5,
        title:"Master-klass",
        date:"19-aprel, 2023",
        view:109,
        text:"«Iwash» va «Carbon technologies» loyihalari asoschilari bilan «Shaxsiy",
        end:"Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass"  
    },
    {
        id:6,
        title:"Musobaqa",
        date:"19-aprel, 2023",
        view:109,
        text:"100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team»",
        end:"«Marketing Team» jamoaviy musobaqasi"  
    },
    {
        id:1,
        title:"Bitiruv marosimi",
        date:"19-aprel, 2023",
        view:119,
        text:"16-aprel kuni «Najot Ta'lim»da Bitiruv marosimi bolib otdi",
        end:"«Bitiruv marosimi» bo'lib o'tdi"  
      },
      {
          id:2,
          title:"Master-klass",
          date:"19-aprel, 2023",
          view:92,
          text:"Farg'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimo",
          end:"«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass"  
      },
      {
          id:4,
          title:"Dasturlash",
          date:"19-aprel, 2023",
          view:109,
          text:"Frontend va Becenchilar o'rtasidagi «Katta musobaqa» jamoaviy",
          end:"«Marketing Team» musobaqasi g'oliblari e'lon qilindi"  
      },
      {
        id:6,
        title:"Musobaqa",
        date:"19-aprel, 2023",
        view:109,
        text:"100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team»",
        end:"«Marketing Team» jamoaviy musobaqasi"  
    },
    {
        id:4,
        title:"Najot Quiz",
        date:"19-aprel, 2023",
        view:109,
        text:"2-aprel kuni bo'lib o'tgan Najot Quiz  musobaqasi",
        end:"O'quvchilarimiz o'rtasida Najot Quiz musobaqasi"  
    },
]
const elList =document.querySelector(".blogs")
const viewAll =document.querySelector(".blog_all-view")
function render(arr =data ,node =elList ,count ) {
    
    node.innerHTML =""
const newarr = arr.slice(0 , count)
newarr.forEach(i =>{
        node.innerHTML += `
        <div class="blog_card ">
        <div class="blog_top blog_bg${i.id}">
                <span>${i.title}</span>
        </div>
        <div class="blog_body">
            <div class="blog_date">
                <span>${i.date} </span>
                <div class="blog_view">
                    <img src="./images/pseudo.jpg" alt="">
                    <span>${i.view} </span>
                </div>
            </div>
            <h4>${i.text}</h4>
                <p class="blog_desc">${i.end}</p>
        </div>
    </div>
        `
    })
}
render(data ,elList , 6)
const elAllBtns =document.querySelector(".filter_btns")
const elAll =document.querySelector(".all-js")
const elParty =document.querySelector(".js-party")
const elMaster =document.querySelector(".js-mas")
const elComp =document.querySelector(".js-competiton")
const elPro =document.querySelector(".js-pro")
const elQuiz =document.querySelector(".js-quiz")
elAll.classList.add("all_courses");
elAllBtns.addEventListener("click", (evt) => {
    evt.preventDefault();
  
    if (evt.target.matches(".all-js")) {
        elAll.classList.add("all_courses");
        elAll.classList.remove("dasturlash");
    //   let filterdCars = data.filter((el) => el.title == "Musobaqa");
    render(data ,elList , 6)
    } else {
        elAll.classList.remove("all_courses");
        elAll.classList.add("dasturlash");
        
    }
    if (evt.target.matches(".js-party")) {
      elParty.classList.add("all_courses");
      elParty.classList.remove("dasturlash");
      
      let filterdCars = data.filter((el) => el.title == "Bitiruv marosimi");
      render(filterdCars);
    } else {
      elParty.classList.remove("all_courses");
      elParty.classList.add("dasturlash");
      
    }
    if (evt.target.matches(".js-mas")) {
      elMaster.classList.add("all_courses");
      elMaster.classList.remove("dasturlash");
      
      let filterdCars = data.filter((el) => el.title == "Master-klass");
      render(filterdCars);
    } else {
      elMaster.classList.remove("all_courses");
      elMaster.classList.add("dasturlash");

      
    }
    if (evt.target.matches(".js-competiton")) {
        elComp.classList.add("all_courses");
        elComp.classList.remove("dasturlash");
        
        let filterdCars = data.filter((el) => el.title == "Musobaqa");
        render(filterdCars);
      } else {
        elComp.classList.remove("all_courses");
        elComp.classList.add("dasturlash");
        
      }
      if (evt.target.matches(".js-pro")) {
        elPro.classList.add("all_courses");
        elPro.classList.remove("dasturlash");
        
        let filterdCars = data.filter((el) => el.title == "Dasturlash");
        render(filterdCars);
      } else {
        elPro.classList.remove("all_courses");
        elPro.classList.add("dasturlash");

      }
      if (evt.target.matches(".js-quiz")) {
        elQuiz.classList.add("all_courses");
        elQuiz.classList.remove("dasturlash");

        let filterdCars = data.filter((el) => el.title == "Najot Quiz");
        render(filterdCars);
      } else {
        elQuiz.classList.remove("all_courses");
        elQuiz.classList.add("dasturlash");

        
      }
  });



  viewAll.addEventListener("click" , (evt)=>{
evt.preventDefault()
render(data ,elList )

viewAll.style.display ="none"
  })