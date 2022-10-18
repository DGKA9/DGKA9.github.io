const Music = new Audio('/audio/36.mp3')
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//create Arr

const web = {
    songs: [
        {
            id:"1",
            songName: ` Chuyện Đôi Ta <br>
            <div class="Menu__song-describe-text">Emcee L (Da LAB) Ft. Muội</div>`,
            poster: "/image/1.jpg"
        },
    
        {
            id:"2",
            songName: ` XIN LỖI VÌ ĐÃ YÊU NHAU <br>
            <div class="Menu__song-describe-text">HOÀI LÂM</div>`,
            poster: "/image/2.jpg"
        },
    
        {
            id:"3",
            songName: `THICHTHICH  <br><div class="Menu__song-describe-text">PHƯƠNG LY</div>`,
            poster: "/image/3.jpg",
        },
        {
            id:"4",
            songName: `TỪNG LÀ CỦA NHAU <br><div class="Menu__song-describe-text">BẢO ANH feat TÁO</div>`,
            poster: "/image/4.jpg",
        },
        {
            id:"5",
            songName: `A LOT <br><div class="Menu__song-describe-text">John K (xooos Cover)</div>`,
            poster: "/image/5.jpg",
        },
        {
            id:"6",
            songName: `Light Switch <br><div class="Menu__song-describe-text"> Charlie Puth (xooos cover)</div>`,
            poster: "/image/6.jpg",
        },
        {
            id:"7",
            songName: `Vì Anh Đâu Có Biết <br><div class="Menu__song-describe-text"> Madihu ( Feat. Vũ. ) </div>`,
            poster: "/image/7.jpg",
        },
        {
            id:"8",
            songName: `Mặt Mộc <br><div class="Menu__song-describe-text"> Phạm Nguyên Ngọc x VAnh </div>`,
            poster: "/image/8.jpg",
        },
        {
            id:"9",
            songName: `Chờ Đợi Có Đáng Sợ <br><div class="Menu__song-describe-text"> Andiez </div>`,
            poster: "/image/9.jpg",
        },
        {
            id:"10",
            songName: `Yêu Một Nguời Có Lẽ <br><div class="Menu__song-describe-text"> Miu Le ft Lou Hoang </div>`,
            poster: "/image/10.jpg",
        },
        {
            id:"11",
            songName: `Chúng Ta Của Hiện Tại <br><div class="Menu__song-describe-text"> SƠN TÙNG M-TP </div>`,
            poster: "/image/11.jpg",
        },
        {
            id:"12",
            songName: `Waiting For You -MONO`,
            poster: "/image/12.jpg",
        },
        {
            id:"13",
            songName: `Call Me - Emily Sie`,
            poster: "/image/13.jpg",
        },
        {
            id:"14",
            songName: `𝖱𝖾𝗇𝖾𝖾́ 𝖽𝗈𝗆𝗂𝗇𝗂𝗊𝗎𝖾 ~ close to you`,
            poster: "/image/14.jpg",
        },
        {
            id:"15",
            songName: `Morning Coffee (w/ Nalba)`,
            poster: "/image/15.jpg",
        },
        {
            id:"16",
            songName: `Booty music - Deepside`,
            poster: "/image/16.jpg",
        },
        {
            id:"17",
            songName: `See Tình - Hoàng Thùy Linh `,
            poster: "/image/17.jpg",
        },
        {
            id:"18",
            songName: `Christmas Time Is Here - Daniela Andrade`,
            poster: "/image/18.jpg",
        },
        {
            id:"19",
            songName: `Last Christmas - George Michael`,
            poster: "/image/19.jpg",
        },
        {
            id:"20",
            songName: `Think Of You - Huynh Huu Khang`,
            poster: "/image/20.jpg",
        },
        {
            id:"21",
            songName: `Rainy Days - Wardhana`,
            poster: "/image/21.jpg",
        },
        {
            id:"22",
            songName: `Rồi anh sẽ chẵng còn nhớ về em`,
            poster: "/image/22.jpg",
        },
        {
            id:"23",
            songName: `Chúng ta đã mất nhau từ bao giờ`,
            poster: "/image/23.jpg",
        },
        {
            id:"24",
            songName: `Em như bông hoa`,
            poster: "/image/24.jpg",
        },
        {
            id:"25",
            songName: `Liệu ngày mưa em có buồn`,
            poster: "/image/25.jpg",
        },
        {
            id:"26",
            songName: `Anh yêu em nhiều lắm`,
            poster: "/image/26.jpg",
        },
        {
            id:"27",
            songName: `Soft Lips (lofi loop mix)`,
            poster: "/image/27.jpg",
        },
        {
            id:"28",
            songName: `Chou1711`,
            poster: "/image/28.jpg",
        },
        {
            id:"29",
            songName: `Mark Mendy`,
            poster: "/image/29.jpg",
        },
        {
            id:"30",
            songName: `Lena Lena`,
            poster: "/image/30.jpg",
        },
        {
            id:"31",
            songName: `Luxøfons`,
            poster: "/image/31.jpg",
        },
        {
            id:"32",
            songName: `WD.E`,
            poster: "/image/32.jpg",
        },
        {
            id:"33",
            songName: `Nom`,
            poster: "/image/33.jpg",
        },
        {
            id:"34",
            songName: `Marzuz`,
            poster: "/image/34.jpg",
        },
        {
            id:"35",
            songName: `Thai Dinh`,
            poster: "/image/35.jpg",
        },
    ],
    render: function(){    
            Array.from($$('.organization')).forEach((element, i)=>{
                element.getElementsByTagName('img')[0].src = this.songs[i].poster;
                element.getElementsByTagName('h5')[0].innerHTML = this.songs[i].songName;
            })    
         
    },
    handleEvents: function(){     
        const masterPlay = $('#masterPlay'); 
        const boss__wave = $$('.boss__wave')[0];
          // Xử lý khi click play   
         masterPlay.addEventListener('click', ()=>{
        if (Music.paused || Music.currentTime <=0) {
            Music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            boss__wave.classList.add('active');
        } else {
            Music.pause();
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            boss__wave.classList.remove('active');
        }
        })

        // Xử lý khi click vào play khác sẽ xóa pause củ đi 
        const makeAllPlays = () =>{
            Array.from($$('.play_list')).forEach((element)=>{
                    element.classList.add('bi-play-fill');
                    element.classList.remove('bi-pause-fill');
            })
        }

        //chạy thông tin bài hát lên play controls
        let  index = 0;
        const boss_img_poster = $('#boss_img_poster'); 
        const title = $('#title'); 
        Array.from($$('.play_list')).forEach((element)=>{
            element.addEventListener('click', (e)=>{
                index = e.target.id;
                makeAllPlays(); 
                e.target.classList.remove('bi-play-fill');
                e.target.classList.add('bi-pause-fill');
                Music.src = `/audio/${index}.mp3`;
                boss_img_poster.src = `/image/${index}.jpg`;
                Music.play();
                const song_title = this.songs.filter((ele)=>{
                    return ele.id == index;
                })
        
                song_title.forEach(ele =>{
                    const {songName} = ele;
                    title.innerHTML = songName;
                })
        
                masterPlay.classList.remove('bi-play-fill');
                masterPlay.classList.add('bi-pause-fill');
                boss__wave.classList.add('active');
                Music.addEventListener('ended', ()=>{
                    masterPlay.classList.add('bi-play-fill');
                    masterPlay.classList.remove('bi-pause-fill');
                    boss__wave.classList.remove('active');
                })
            })
        })

        const TimeStart = $('#TimeStart');
        const TimeEnd = $('#TimeEnd');
        const seek = $('#seek');
        const bar2 = $('#bar2');
        const dot = $$('.dot')[0];  
        Music.addEventListener('timeupdate',()=>{

            //Thời gian bắt đầu
            const Music_time = Music.currentTime;
            const Music_dime = Music.duration;

            let min = Math.floor(Music_dime/60);
            let sec = Math.floor(Music_dime%60);
            if(sec < 10){
                sec = `0${sec}`
            }
            TimeEnd.innerText = `${min}:${sec}`;

            //thời gian kết thúc
            let min1 = Math.floor(Music_time/60);
            let sec1 = Math.floor(Music_time%60);
            if(sec1 < 10){
                sec1 = `0${sec1}`
            }
            TimeStart.innerText = `${min1}:${sec1}`;
            // khi tiến độ bài hát thay đổi 
            const progressbar = Math.floor((Music.currentTime/Music.duration)*100);
            seek.value = progressbar;
            const seekbar  = seek.value;
            bar2.style.width = `${seekbar}%`;
            dot.style.left = `${seekbar}%`;
        
        })

        // xử lý khi tua song 
        seek.addEventListener('change', ()=>{
            const seekTime = Music.duration/100 * seek.value
            Music.currentTime = seekTime
        })
        
        

        // Tăng giảm âm thanh bài hát
        const vol_icon = $('#vol_icon');
        const vol = $('#vol');
        const vol_dot = $('#vol_dot');
        const vol_bar = $$('.vol_bar')[0];
        vol.addEventListener('change', ()=>{
            if(vol.value == 0){
                vol_icon.classList.remove('bi-volume-down');
                vol_icon.classList.add('bi-volume-mute');
                vol_icon.classList.remove('bi-volume-up');
            }
            if(vol.value > 0){
                vol_icon.classList.add('bi-volume-down');
                vol_icon.classList.remove('bi-volume-mute');
                vol_icon.classList.remove('bi-volume-up');
            }
            if(vol.value > 50){
                vol_icon.classList.remove('bi-volume-down');
                vol_icon.classList.remove('bi-volume-mute');
                vol_icon.classList.add('bi-volume-up');
            }
        
            const vol_a = vol.value;
            vol_bar.style.width = `${vol_a}%`;
            vol_dot.style.left = `${vol_a}%`;
            Music.volume = vol_a/100;
        })


        const back = $('#back');
        const next = $('#next');
        //BackSong lui bài hát    
        back.addEventListener('click', ()=>{
            index -= 1;
            if(index < 1){
                index = Array.from($$('.organization')).length;
            }
        
            Music.src = `/audio/${index}.mp3`;
            boss_img_poster.src = `/image/${index}.jpg`;
            Music.play();
            const song_title = this.songs.filter((ele)=>{
                return ele.id == index;
            })
        
            song_title.forEach(ele =>{
                const {songName} = ele;
                title.innerHTML = songName;
            })
            makeAllPlays();
            $(`${index}`).classList.remove('bi-play-fill');
            $(`${index}`).classList.add('bi-pause-fill');
            
        })
        
        //NextSong tiến bài hát
        next.addEventListener('click', ()=>{
            index -= 0;
            index += 1;
            if(index > Array.from($$('.organization')).length){
                index = 1;
            }
        
            Music.src = `/audio/${index}.mp3`;
            boss_img_poster.src = `/image/${index}.jpg`;
            Music.play();
            const song_title = this.songs.filter((ele)=>{
                return ele.id == index;
            })
        
            song_title.forEach(ele =>{
                const {songName} = ele;
                title.innerHTML = songName;
            })
            
            makeAllPlays();
            $(`${index}`).classList.remove('bi-play-fill');
            $(`${index}`).classList.add('bi-pause-fill');
        })
        
        // chuyen bai tu dong
        Music.onended = function (){ 
            next.click();
        //xem xét để xóa
        Music.addEventListener('ended', ()=>{ 
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            boss__wave.classList.add('active');
            }) 
        }
        
        
        
        //Thanh trượt More of what you like
        const left_Gallery = $('#left_Gallery');
        const right_Gallery = $('#right_Gallery');
        const  js_Gallery_slider = $$('.js_Gallery_slider')[0];
        
        
        left_Gallery.addEventListener('click', ()=>{
            js_Gallery_slider.scrollLeft -= 330;
        })
        
        right_Gallery.addEventListener('click', ()=>{
            js_Gallery_slider.scrollLeft += 330;
        })
        
        //Thanh trượt Chill
        const left_Gallerys = $('#left_Gallerys');
        const right_Gallerys = $('#right_Gallerys');
        const  js_Gallery_sliders = $$('.js_Gallery_sliders')[0];
        
        left_Gallerys.addEventListener('click', ()=>{
            js_Gallery_sliders.scrollLeft -= 330;
        })
        
        right_Gallerys.addEventListener('click', ()=>{
            js_Gallery_sliders.scrollLeft += 330;
        })
        
        //Thanh trượt Artists You Should Know
        const left_Galleryss = $('#left_Galleryss');
        const right_Gallerysss = $('#right_Galleryss');
        const  js_Gallery_sliderss = $$('.js_Gallery_sliderss')[0];
        
        
        left_Galleryss.addEventListener('click', ()=>{
            js_Gallery_sliderss.scrollLeft -= 330;
        })
        
        right_Gallerysss.addEventListener('click', ()=>{
            js_Gallery_sliderss.scrollLeft += 330;
        })
        
        
        //click btn sign in
        const LoginBtn = $('.js-header__navbar-item')
        const CreateBtn = $('.js-auth-form__switch-btn')
        const ModalAuthForms = $('.js-auth-forms')
        const Modal = $('.js-modal')
        const ModalAuthForm = $('.js-auth-form')
        const ModalClose = $('.js-modal__close')
        const ModalCloses = $('.js-modal__closes')
        const BackSignIn = $('.js-Create')
        
        // Sự kiện lắng nghe click Sign in
        LoginBtn.addEventListener('click', ()=>{
            Modal.classList.add('open') 
            ModalAuthForm.style.display = 'block'
            ModalAuthForms.style.display = 'none'
        })
        // Sự kiện lắng nghe click create
        CreateBtn.addEventListener('click', ()=>{
            ModalAuthForm.style.display = 'none'
            ModalAuthForms.style.display = 'block'
        })
        //click nút close Signin
        ModalClose.addEventListener('click', ()=>{
            Modal.classList.remove('open') 
        })
        //click nút close create
        ModalCloses.addEventListener('click', ()=>{
            Modal.classList.remove('open') 
        })
        //click khoảng không 
        Modal.addEventListener('click', ()=>{
            Modal.classList.remove('open') 
        })
        //click ngắn chặn nổi bọt Sign In
        ModalAuthForm.addEventListener('click', (event)=>{
            event.stopPropagation()
        })
        //click ngắn chặn nổi bọt create
        ModalAuthForms.addEventListener('click',  (event)=>{
            event.stopPropagation()
        })
        //click quay lại SignIn 
        BackSignIn.addEventListener('click', ()=>{
            ModalAuthForms.style.display = 'none'
            ModalAuthForm.style.display = 'block'
        })
    
    },
    search: function(){
        //  search data start
        const search_heading = $('.header__navbar-search-history')
        const search_results = $$('.js-search-history-list')[0];
            this.songs.forEach(element => {
            const {id , songName, poster} = element;
            let card = document.createElement('a')
            card.classList.add('list__card')        
            card.href = '#' + id;
            card.innerHTML =`
            <img src="${poster}" alt="" class="list__card-img">
            <div class="list__card-content js-content">
            ${songName}
            </div>
            `;
            search_results.appendChild(card);
        });


        // gõ text để tìm kiếm
        let input = $$('.header__navbar-search-input')[0]

        input.addEventListener('keyup', ()=>{
            let input_value = input.value.toUpperCase();
            let items =  search_results.getElementsByTagName('a');

            for (let index = 0; index < items.length; index++) {
                let as = items[index].getElementsByClassName('js-content')[0];
                let text_value = as.textContent ||  as.innerText;

                if (text_value.toUpperCase().indexOf(input_value) > -1 ) {
                    items[index].style.display = "flex";    
                } else {
                    items[index].style.display = "none";
                }

                if(input_value == 0 ) {
                    search_heading.style.display = "none";
                    search_results.style.display = "none";
                } else {
                    search_heading.style.display = "block";
                    search_results.style.display = "";
                }
                
            }
        })
        //  search data end
    },
    start: function() {
        //lắng nghe / xử lý  các sự kiện (DOM events)
        this.handleEvents()
        //tìm kiếm bài hát
        this.search()
        //Render playlist
        this.render()
    }
}

web.start()





