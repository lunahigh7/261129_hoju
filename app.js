const spots = [
  ['Sydney Opera House','sydney','명소',-33.8568,151.2153,4.8,92235,'하버를 대표하는 건축물. 한국어 후기가 풍부해 투어·공연 선택에 도움이 돼요.'],
  ['Royal Botanic Garden Sydney','sydney','자연',-33.8642,151.2166,4.7,25400,'오페라하우스와 이어 걷기 좋은 무료 정원.'],
  ['BridgeClimb Sydney','sydney','체험',-33.8523,151.2108,4.7,6492,'하버브리지 정상 체험. 한국인 후기는 일몰 시간대를 많이 추천해요.'],
  ['Museum of Contemporary Art Australia','sydney','문화',-33.8599,151.2090,4.3,9503,'서큘러키 전망과 무료 상설전을 함께 즐기는 현대미술관.'],
  ['Bondi Beach','sydney','자연',-33.8915,151.2767,4.6,5633,'대표 해변. 블로그 후기는 이른 오전과 해안 산책 연계를 추천해요.'],
  ['Taronga Zoo Sydney','sydney','체험',-33.8433,151.2411,4.5,36102,'페리 이동, 하버 전망과 호주 동물을 한 번에 즐겨요.'],
  ['Queen Victoria Building','sydney','쇼핑',-33.8718,151.2067,4.6,21124,'아름다운 역사 건축과 쇼핑을 함께 즐기는 도심 명소.'],
  ['Mr. Wong','sydney','맛집',-33.8641,151.2083,4.4,5836,'딤섬과 광둥요리. 네이버 후기에는 예약, 가지튀김, 분위기 언급이 많아요.'],
  ['The Grounds of the City','sydney','카페',-33.8718,151.2067,4.2,6636,'QVB 인근의 화려한 인테리어와 브런치로 유명한 카페.'],
  ['Chat Thai Haymarket','sydney','맛집',-33.8793,151.2065,4.0,4002,'헤이마켓의 인기 태국 음식점. 피크 시간 대기를 감안하세요.'],
  ["Hurricane's Grill Circular Quay",'sydney','맛집',-33.8610,151.2099,4.2,2884,'서큘러키에서 립과 스테이크를 즐기기 좋은 곳.'],
  ['Pancakes On The Rocks','sydney','카페',-33.8585,151.2084,4.1,9164,'록스의 대표 팬케이크 매장. 늦은 시간 식사 후보로도 자주 언급돼요.'],
  ['Single O Surry Hills','sydney','카페',-33.8802,151.2082,4.5,3196,'스페셜티 커피와 브런치로 사랑받는 서리힐스 카페.'],
  ['Bourke Street Bakery Surry Hills','sydney','카페',-33.8862,151.2145,4.5,2152,'사워도우, 소시지 롤과 타르트가 인기인 로컬 베이커리.'],
  ['Gumshara','sydney','맛집',-33.8797,151.2049,4.3,2765,'진한 돈코츠 라멘으로 유명한 헤이마켓의 작은 맛집.'],
  ['Mamak Haymarket','sydney','맛집',-33.8789,151.2055,4.3,6075,'로티와 커리로 유명한 말레이시아 음식점. 대기 가능성이 높아요.'],
  ['Ho Jiak Town Hall','sydney','맛집',-33.8725,151.2065,4.7,2820,'강렬한 말레이시아 요리와 개성 있는 실내가 인기예요.'],
  ['National Gallery of Victoria','melbourne','문화',-37.8226,144.9689,4.7,26009,'무료 상설전이 풍성한 대표 미술관.'],
  ['State Library Victoria','melbourne','문화',-37.8098,144.9652,4.8,4700,'돔형 열람실과 전시 공간이 인상적인 도서관.'],
  ['Queen Victoria Market','melbourne','마켓',-37.8076,144.9568,4.5,60361,'식재료, 기념품과 간식을 즐기는 대형 시장. 휴무일을 확인하세요.'],
  ['Royal Botanic Gardens Victoria','melbourne','자연',-37.8304,144.9796,4.8,19675,'도심 속 넓은 정원. 피크닉과 느긋한 산책에 좋아요.'],
  ['Brighton Bathing Boxes','melbourne','명소',-37.9174,144.9860,4.4,12093,'컬러풀한 해변 오두막. 오전 방문이 비교적 한적해요.'],
  ['Chin Chin Melbourne','melbourne','맛집',-37.8157,144.9702,4.2,8425,'활기찬 동남아 요리. 한국어 후기에서도 웨이팅 언급이 많아요.'],
  ['Higher Ground Melbourne','melbourne','카페',-37.8159,144.9530,4.1,6141,'높은 천장과 인상적인 공간으로 유명한 브런치 카페.'],
  ['Lune Croissanterie Fitzroy','melbourne','카페',-37.7980,144.9780,4.4,5323,'대표 크루아상 매장. 네이버 후기는 이른 방문을 권해요.'],
  ['The Hardware Société','melbourne','카페',-37.8196,144.9587,4.4,4572,'프렌치 감성의 인기 브런치와 커피.'],
  ['Tipo 00','melbourne','맛집',-37.8135,144.9618,4.5,3409,'수제 파스타로 유명한 작은 식당. 사전 예약을 추천해요.'],
  ['Supernormal Melbourne','melbourne','맛집',-37.8168,144.9695,4.5,5320,'아시아풍 현대 요리와 랍스터 롤이 인기인 레스토랑.'],
  ['Mamasita Melbourne','melbourne','맛집',-37.8136,144.9733,4.3,2271,'콜린스 스트리트의 활기찬 멕시코 음식점.'],
  ['Operator25','melbourne','카페',-37.8103,144.9562,4.4,3174,'옛 전화교환소 건물에서 즐기는 브런치와 커피.'],
  ['Seven Seeds Coffee Roasters','melbourne','카페',-37.8027,144.9590,4.4,3787,'칼튼의 넓은 로스터리 카페. 멜버른 커피 입문지로 좋아요.'],
  ['ST. ALi Coffee Roasters','melbourne','카페',-37.8313,144.9594,4.2,3914,'사우스 멜버른의 대표 로스터리. 커피와 브런치를 함께 즐기기 좋아요.']
].map((s,id)=>({id,name:s[0],city:s[1],cat:s[2],lat:s[3],lng:s[4],rating:s[5],reviews:s[6],desc:s[7]}));

const categoryColors={맛집:'#e0523c',카페:'#9b6b43',명소:'#3478b8',자연:'#3a8f65',문화:'#7559a6',체험:'#e5962d',쇼핑:'#d05b91',마켓:'#547b32'};
const categories=['전체',...Object.keys(categoryColors)];let active='전체';
const map=L.map('map',{zoomControl:false}).setView([-35.4,147.5],5);L.control.zoom({position:'bottomright'}).addTo(map);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
const gm=s=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name+' Australia')}`;
const nb=s=>`https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(`${s.city==='sydney'?'시드니':'멜버른'} ${s.name} 후기`)}`;
const fmt=n=>new Intl.NumberFormat('ko-KR').format(n);const markers=[];
spots.forEach(s=>{const icon=L.divIcon({className:'category-marker',html:`<span style="--marker:${categoryColors[s.cat]}" aria-label="${s.cat}"></span>`,iconSize:[20,20],iconAnchor:[10,10]});const m=L.marker([s.lat,s.lng],{icon}).bindPopup(`<small>${s.city.toUpperCase()} · ${s.cat}</small><h3>${s.name}</h3><div class="rating">★ ${s.rating} <span>리뷰 ${fmt(s.reviews)}개</span></div><p>${s.desc}</p><div class="popup-links"><a target="_blank" rel="noopener" href="${gm(s)}">Google Maps ↗</a><a target="_blank" rel="noopener" href="${nb(s)}">Naver Blog ↗</a></div>`).addTo(map);markers.push({s,m})});
const filters=document.querySelector('#filters'),list=document.querySelector('#spotList');categories.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.className=c==='전체'?'active':'';if(c!=='전체')b.style.setProperty('--category',categoryColors[c]);b.onclick=()=>{active=c;document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active',x===b));renderSpots()};filters.append(b)});
const spotCard=s=>`<article class="spot" data-id="${s.id}" style="--category:${categoryColors[s.cat]}"><small><i></i>${s.city.toUpperCase()} · ${s.cat}</small><h3>${s.name}</h3><div class="rating">★ ${s.rating} <span>Google 리뷰 ${fmt(s.reviews)}개</span></div><p>${s.desc}</p><div class="badges"><b>✓ 3.5+</b><b>✓ 리뷰 500+</b><b>🇰🇷 한국어 리뷰</b></div><div class="spot-links"><a target="_blank" rel="noopener" href="${gm(s)}">GOOGLE MAPS ↗</a><a target="_blank" rel="noopener" href="${nb(s)}">NAVER BLOG ↗</a></div></article>`;
function renderSpots(){const shown=spots.filter(s=>active==='전체'||s.cat===active);markers.forEach(({s,m})=>shown.includes(s)?m.addTo(map):m.remove());list.innerHTML=shown.map(spotCard).join('');document.querySelector('#spotCount').textContent=shown.length;list.querySelectorAll('.spot').forEach(el=>el.onclick=e=>{if(e.target.closest('a'))return;const {m}=markers.find(x=>x.s.id==el.dataset.id);map.setView(m.getLatLng(),14);m.openPopup()})}renderSpots();
const routes={sydney:[['11.29','도착 & 하버 첫인상',['호텔 체크인','서큘러키','오페라하우스 야경'],'비행 피로를 고려한 가벼운 도보 일정'],['11.30','하버 클래식',['Royal Botanic Garden','Opera House 투어','BridgeClimb 또는 전망대'],'하버 주변을 시계 방향으로 연결'],['12.01','본다이 블루',['Bondi Beach','해안 산책','Single O 또는 로컬 저녁'],'맑은 날로 날짜 교체 추천'],['12.02','도심 & 미식',['QVB','MCA','The Grounds','Mr. Wong'],'쇼핑과 미술관을 섞은 실내 대안'],['12.03','블루마운틴',['Katoomba','Echo Point','Scenic World'],'왕복 1일 투어 또는 기차'],['12.04','페리 데이',['Manly Ferry','Taronga Zoo','서큘러키 저녁'],'하버 페리 이동 자체를 여행으로 즐기기']],melbourne:[['12.05','멜버른 이동',['시드니→멜버른','Flinders Street','Supernormal'],'오후 도착 기준 가벼운 CBD 산책'],['12.06','레이노웨이 & 아트',['Higher Ground','State Library','Arcades','NGV'],'무료 트램 구역과 도보 활용'],['12.07','마켓 & 피츠로이',['Queen Victoria Market','Market Lane','Fitzroy','Lune'],'시장 휴무일이면 12/9와 교체'],['12.08','그레이트 오션 로드',['Torquay','Apollo Bay','Twelve Apostles'],'아주 이른 출발 · 긴 이동 대비'],['12.09','가든 & 베이',['Royal Botanic Gardens','Brighton Boxes','St Kilda 노을'],'기차와 트램으로 남쪽 해안 연결'],['12.10','마지막 커피',['Operator25','기념품 쇼핑','공항 이동'],'국제선은 여유 있게 공항 이동']]};
const cards=document.querySelector('#routeCards');function renderRoutes(city){cards.innerHTML=routes[city].map((r,i)=>`<article class="route-card"><div class="day">0${i+1}</div><small>${r[0]}</small><h3>${r[1]}</h3><ul>${r[2].map((x,j)=>`<li><span>${String(j+1).padStart(2,'0')}</span>${x}</li>`).join('')}</ul><p>${r[3]}</p></article>`).join('')}renderRoutes('sydney');document.querySelectorAll('.city-tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.city-tabs button').forEach(x=>x.classList.toggle('active',x===b));renderRoutes(b.dataset.city)});
