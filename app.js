/* ==========================================================================
   MealMate Premium Core Logic & Database
   ========================================================================== */

// --- 1. BOOSTRAP DATABASE OF RECIPES (Slovak Language) ---
const RECIPE_DATABASE = {
    ranajky: {
        lacnejsie: [
            {
                id: 'r_lac_1',
                name: 'Maslová praženica s cibuľkou',
                description: 'Klasická slovenská praženica z čerstvých vajec na troche masla s cibuľkou, podávaná s krajcom chleba.',
                price: 1.10,
                priceTier: 'lacnejsie',
                calories: 320,
                protein: 16,
                carbs: 18,
                fats: 20,
                time: '10 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '3 ks čerstvé vajcia',
                    '10g masla',
                    '1/2 ks cibule',
                    '1 krajec pšenično-ražného chleba (50g)',
                    'Štipka soli a čierneho korenia',
                    'Čerstvá pažítka na ozdobu'
                ],
                steps: [
                    'Cibuľu nakrájajte najemno.',
                    'Na panvici rozpusťte maslo a cibuľku osmažte dosklovita.',
                    'Vajíčka rozbite do misky, jemne osoľte a vyšľahajte vidličkou.',
                    'Vylejte vajíčka na panvicu a za stáleho miešania na miernom ohni pripravte praženicu do krémovej konzistencie.',
                    'Podávajte s čerstvým krajcom chleba posypané pažítkou.'
                ],
                tags: ['ľahké', 'slané', 'teplé', 'vajcia', 'pečivo']
            },
            {
                id: 'r_lac_2',
                name: 'Sladká ovsená kaša s jablkom',
                description: 'Cenovo nenáročná ovsená kaša varená vo vode s pridaním mlieka, škorice a nastrúhaného jablka.',
                price: 0.80,
                priceTier: 'lacnejsie',
                calories: 290,
                protein: 8,
                carbs: 58,
                fats: 4,
                time: '12 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '50g jemných ovsených vločiek',
                    '100ml polotučného mlieka',
                    '150ml vody',
                    '1 ks menšie jablko (nastrúhané)',
                    '1/2 lyžičky mletej škorice',
                    '1 lyžička cukru alebo medu'
                ],
                steps: [
                    'V malom hrnci zmiešajte ovsené vločky s vodou a mliekom.',
                    'Priveďte do varu a na miernom ohni varte cca 5 minút do zhustnutia.',
                    'Medzitým nastrúhajte jablko a vmiešajte ho do kaše spolu so škoricou.',
                    'Varte ešte 2 minúty, kým jablko nezmäkne.',
                    'Osláďte medom alebo cukrom a podávajte teplé.'
                ],
                tags: ['ľahké', 'sladké', 'teplé', 'zelenina', 'ryža'] // jablko/vločky spadajú pod ľahké sladké
            },
            {
                id: 'r_lac_3',
                name: 'Banánový toast s arašidovým maslom',
                description: 'Rýchle a výživné raňajky z celozrnného toastu s arašidovým maslom a plátkami čerstvého banánu, posypané škoricou.',
                price: 0.90,
                priceTier: 'lacnejsie',
                calories: 340,
                protein: 10,
                carbs: 48,
                fats: 14,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '2 plátky celozrnného toastového chleba',
                    '15g arašidového masla',
                    '1 ks zrelý banán',
                    'Štipka mletej škorice',
                    '1 lyžička medu'
                ],
                steps: [
                    'Toastový chlieb opečte v hriankovači do chrumkava.',
                    'Na teplé toasty natrite arašidové maslo.',
                    'Banán nakrájajte na tenké kolieska a rozložte na toasty.',
                    'Posypte škoricou a pokvapkajte medom.'
                ],
                tags: ['ľahké', 'sladké', 'teplé', 'pečivo']
            }
        ],
        standard: [
            {
                id: 'r_std_1',
                name: 'Vajcová omeleta so špenátom a paradajkami',
                description: 'Bohatá a výživná omeleta plná bielkovín s čerstvým špenátom, baby paradajkami a jemným olivovým olejom.',
                price: 1.50,
                priceTier: 'standard',
                calories: 280,
                protein: 18,
                carbs: 6,
                fats: 19,
                time: '15 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '3 ks vajcia',
                    '50g čerstvého baby špenátu',
                    '5 ks cherry paradajok',
                    '1 lyžička olivového oleja',
                    'Soľ, čierne korenie',
                    'Cibuľa, cesnak'
                ],
                steps: [
                    'Cherry paradajky nakrájajte na polovice, špenát umyte a osušte.',
                    'Na panvici rozohrejte olivový olej, pridajte prelisovaný cesnak a špenát. Nechajte zvädnúť cca 2 minúty.',
                    'Vajíčka vyšľahajte v miske so soľou a korením a vylejte na panvicu k špenátu.',
                    'Navrch rovnomerne poukladajte cherry paradajky.',
                    'Zakryte pokrievkou a pečte na miernom ohni cca 5-7 minút, kým omeleta nestuhne.'
                ],
                tags: ['ľahké', 'slané', 'teplé', 'vajcia', 'zelenina']
            },
            {
                id: 'r_std_2',
                name: 'Proteínová ovsená kaša s banánom',
                description: 'Kaša obohatená o srvátkový proteín, ktorý dodá potrebné bielkoviny, zdobená kolieskami banánu.',
                price: 1.60,
                priceTier: 'standard',
                calories: 410,
                protein: 32,
                carbs: 55,
                fats: 6,
                time: '10 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '50g jemných ovsených vločiek',
                    '30g srvátkového proteínu (vanilka alebo čokoláda)',
                    '150ml polotučného mlieka',
                    '100ml vody',
                    '1/2 ks banánu',
                    '10g vlašských orechov'
                ],
                steps: [
                    'Do hrnca dajte vločky, vodu a mlieko a uvarte hustú kašu.',
                    'Hrnček odstavte z plameňa a nechajte 1 minútu mierne vychladnúť.',
                    'Vmiešajte proteínový prášok (ak by bola kaša príliš hustá, prilejte trochu vody).',
                    'Nalejte do misky, ozdobte nakrájaným banánom a posypte orechmi.'
                ],
                tags: ['sýte', 'sladké', 'teplé', 'smoothie']
            },
            {
                id: 'r_std_3',
                name: 'Tvarohové lievance s lesným ovocím',
                description: 'Nadýchané lievance z tvarohového cesta, podávané s čerstvým lesným ovocím a lyžicou kyslej smotany.',
                price: 2.10,
                priceTier: 'standard',
                calories: 380,
                protein: 22,
                carbs: 42,
                fats: 12,
                time: '20 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '150g jemného tvarohu',
                    '1 ks vajce',
                    '3 lyžice hladkej múky',
                    '50g čerstvých lesných plodov (čučoriedky, maliny)',
                    '1 lyžica kyslej smotany',
                    'Štipka soli, cukor na posypanie'
                ],
                steps: [
                    'V miske zmiešajte tvaroh s vajcom, múkou a štipkou soli na hladké cesto.',
                    'Na panvici rozohrejte trochu oleja a lyžicou kladte malé lievance.',
                    'Pečte z každej strany cca 2-3 minúty do zlatista.',
                    'Podávajte teplé s kyslou smotanou a čerstvým lesným ovocím.',
                    'Posypte práškovým cukrom podľa chuti.'
                ],
                tags: ['sýte', 'sladké', 'teplé', 'vajcia', 'syr']
            }
        ],
        drahsie: [
            {
                id: 'r_drh_1',
                name: 'Avokádový toast s lososom a vajcom',
                description: 'Luxusné raňajky z kváskového chleba s krémovým avokádom, plátkami jemne údeného lososa a pošírovaným vajíčkom.',
                price: 4.50,
                priceTier: 'drahsie',
                calories: 490,
                protein: 26,
                carbs: 32,
                fats: 28,
                time: '18 min',
                difficulty: 'Stredne náročné',
                ingredients: [
                    '1 hrubší krajec kváskového chleba (70g)',
                    '1/2 ks zrelého avokáda',
                    '50g údeného lososa',
                    '1 ks čerstvé vajce (veľkosť L)',
                    '1 lyžička citrónovej šťavy',
                    'Soľ, chilli vločky, mikrobylinky'
                ],
                steps: [
                    'Avokádo roztlačte vidličkou v miske, pridajte citrónovú šťavu, soľ a štipku chilli.',
                    'Chlieb opečte v hriankovači alebo nasucho na panvici do chrumkava.',
                    'Pripravte stratené (pošírované) vajce vo vriacej vode s octom cca 3 minúty.',
                    'Na opečený toast natrite avokádovú nátierku, rozložte plátky údeného lososa.',
                    'Opatrne položte teplé pošírované vajce na lososa, osoľte ho a ozdobte mikrobylinkami.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'ryba', 'avokádo', 'vajcia', 'pečivo']
            },
            {
                id: 'r_drh_2',
                name: 'Eggs Benedict s hollandaise omáčkou',
                description: 'Luxusné raňajky z anglických muffinov s pošírovanými vajcami, šunkou a domácou hollandaise omáčkou z masla a citrónov.',
                price: 4.20,
                priceTier: 'drahsie',
                calories: 520,
                protein: 24,
                carbs: 30,
                fats: 34,
                time: '25 min',
                difficulty: 'Stredne náročné',
                ingredients: [
                    '1 ks anglický muffin (alebo kváskový rožok)',
                    '2 ks čerstvé vajcia',
                    '40g kvalitnej šunky',
                    '30g masla',
                    '1 ks žĺtok (na omáčku)',
                    '1 lyžička citrónovej šťavy',
                    'Soľ, biely korenie, čerstvá pažítka'
                ],
                steps: [
                    'Pripravte hollandaise: žĺtok šľahajte nad parou s lyžičkou citrónovej šťavy, postupne pridávajte rozpustené maslo, kým nevznikne krémová omáčka.',
                    'Muffin rozkrojte a opečte na panvici do chrumkava.',
                    'Pošírujte 2 vajcia vo vriacej vode s trochou octu cca 3 minúty.',
                    'Na muffiny položte šunku, na ňu pošírované vajcia.',
                    'Polejte hollandaise omáčkou a posypte nasekanou pažítkou.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'vajcia', 'pečivo']
            },
            {
                id: 'r_drh_3',
                name: 'Açaí bowl s granolou a kokosovým mliekom',
                description: 'Exotický smoothie bowl z mrazeného açaí pyré, ozdobený domácou granolou, čerstvým ovocím a kokosom.',
                price: 4.80,
                priceTier: 'drahsie',
                calories: 450,
                protein: 10,
                carbs: 62,
                fats: 18,
                time: '10 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '100g mrazeného açaí pyré',
                    '1/2 ks mrazený banán',
                    '50ml kokosového mlieka',
                    '30g granoly',
                    '1 lyžica kokosových lupienkov',
                    '30g čerstvých jahôd alebo čučoriedok'
                ],
                steps: [
                    'Açaí pyré, mrazený banán a kokosové mlieko rozmixujte v mixéri do hustej krémovej konzistencie.',
                    'Vyložte do misky a povrch zahlaďte.',
                    'Na vrch nasypte granolu, kokosové lupienky a čerstvé ovocie.',
                    'Podávajte ihneď, kým je smoothie ešte studené a husté.'
                ],
                tags: ['ľahké', 'sladké', 'studené', 'smoothie']
            }
        ]
    },
    desiata: {
        lacnejsie: [
            {
                id: 'd_lac_1',
                name: 'Jemný tvaroh s medom a škoricou',
                description: 'Klasický nízkotučný tvaroh rozmiešaný s trochou vody na krém, osladený včelím medom a prevoňaný škoricou.',
                price: 0.90,
                priceTier: 'lacnejsie',
                calories: 210,
                protein: 24,
                carbs: 22,
                fats: 1,
                time: '3 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '200g jemného nízkotučného tvarohu',
                    '15g včelieho medu (1 plná lyžička)',
                    'Štipka mletej škorice'
                ],
                steps: [
                    'Tvaroh dajte do misky, pridajte lyžicu teplej vody pre krémovú konzistenciu.',
                    'Dôkladne premiešajte vidličkou.',
                    'Polejte medom a posypte mletou škoricou.'
                ],
                tags: ['ľahké', 'sladké', 'studené', 'syr']
            },
            {
                id: 'd_lac_2',
                name: 'Banán s arašidovým maslom',
                description: 'Rýchla a sýta desiata — banán namáčaný v lyžici arašidového masla, ideálny zdroj energie.',
                price: 0.60,
                priceTier: 'lacnejsie',
                calories: 230,
                protein: 6,
                carbs: 32,
                fats: 9,
                time: '1 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['1 ks zrelý banán', '15g 100% arašidového masla', 'Štipka škorice'],
                steps: ['Banán olúpte a nakrájajte na kolieska.', 'Polejte arašidovým maslom a posypte škoricou.'],
                tags: ['ľahké', 'sladké', 'studené']
            },
            {
                id: 'd_lac_3',
                name: 'Ryžové chlebíky s tvarohom a paradajkou',
                description: 'Slaná verzia desiaty — chrumkavé ryžové chlebíky s natretým tvarohom a plátkami paradajky.',
                price: 0.80,
                priceTier: 'lacnejsie',
                calories: 220,
                protein: 18,
                carbs: 28,
                fats: 3,
                time: '3 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['3 ks ryžové chlebíky', '120g jemný tvaroh', '1 ks paradajka', 'Soľ, pažítka'],
                steps: ['Tvaroh osoľte a natrite na chlebíky.', 'Položte plátky paradajky a posypte pažítkou.'],
                tags: ['ľahké', 'slané', 'studené', 'syr', 'zelenina']
            }
        ],
        standard: [
            {
                id: 'd_std_1',
                name: 'Grécky jogurt s vlašskými orechmi',
                description: 'Pravý grécky jogurt s 5% tuku, ktorý dodá vápnik a zdravé tuky, doplnený o chrumkavé vlašské orechy.',
                price: 1.40,
                priceTier: 'standard',
                calories: 260,
                protein: 12,
                carbs: 10,
                fats: 19,
                time: '3 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '150g pravého gréckeho jogurtu',
                    '20g vlašských orechov',
                    '1 lyžička javorového sirupu'
                ],
                steps: [
                    'Jogurt vyklopte do misky.',
                    'Vlašské orechy zľahka nasekajte na menšie kúsky.',
                    'Orechy nasypte na jogurt a zľahka polejte javorovým sirupom.'
                ],
                tags: ['ľahké', 'sladké', 'studené', 'syr']
            },
            {
                id: 'd_std_2',
                name: 'Cottage syr s redkvičkou a celozrnným pečivom',
                description: 'Vysoko proteínová desiata s cottage syrom, chrumkavou redkvičkou a celozrnným pečivom.',
                price: 1.60,
                priceTier: 'standard',
                calories: 290,
                protein: 22,
                carbs: 30,
                fats: 7,
                time: '4 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['150g cottage syra', '4 ks redkvičky', '1 ks celozrnný rožok', 'Soľ, čierne korenie, pažítka'],
                steps: ['Cottage syr osoľte a okoreňte.', 'Redkvičky nakrájajte na kolieska a vmiešajte.', 'Podávajte s celozrnným rožkom.'],
                tags: ['ľahké', 'slané', 'studené', 'syr', 'zelenina', 'pečivo']
            },
            {
                id: 'd_std_3',
                name: 'Domáci proteínový bar z ovsa a datlí',
                description: 'Domáca alternatíva drahých proteínových tyčiniek — z ovsa, datlí, proteínu a arašidového masla.',
                price: 1.40,
                priceTier: 'standard',
                calories: 310,
                protein: 18,
                carbs: 38,
                fats: 9,
                time: '15 min',
                difficulty: 'Jednoduché',
                ingredients: ['40g ovsené vločky', '4 ks mäkké datle', '20g srvátkový proteín', '10g arašidové maslo', '1 lyžica vody'],
                steps: ['Datle rozmixujte so 2 lyžicami vody na pastu.', 'Pridajte vločky, proteín a arašidové maslo.', 'Vytvarujte tyčinky a dajte chladiť aspoň 10 minút.'],
                tags: ['sýte', 'sladké', 'studené']
            }
        ],
        drahsie: [
            {
                id: 'd_drh_1',
                name: 'Malinový chia puding z kokosového mlieka',
                description: 'Exotický chia puding z poctivého kokosového mlieka, vrstvený s pyré z čerstvých malín.',
                price: 2.80,
                priceTier: 'drahsie',
                calories: 280,
                protein: 6,
                carbs: 24,
                fats: 16,
                time: '10 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '100ml kokosového mlieka (z plechovky)',
                    '100ml mandľového mlieka',
                    '3 lyžice chia semienok (approx. 25g)',
                    '80g čerstvých malín',
                    '1 lyžica agáve sirupu'
                ],
                steps: [
                    'V pohári zmiešajte kokosové a mandľové mlieko, agáve sirup a chia semienka.',
                    'Dobre premiešajte a nechajte 10 minút stáť, potom znova premiešajte, aby nevznikli hrudky. Dajte chladiť (najlepšie cez noc).',
                    'Maliny roztlačte vidličkou na jemné pyré.',
                    'Na stuhnutý chia puding navrstvite malinové pyré a ozdobte celými malinami.'
                ],
                tags: ['ľahké', 'sladké', 'studené', 'smoothie']
            },
            {
                id: 'd_drh_2',
                name: 'Skyr s lyofilizovaným ovocím a mandľami',
                description: 'Islandský skyr — extra vysoký obsah bielkovín, s chrumkavým lyofilizovaným ovocím a opraženými mandľami.',
                price: 2.60,
                priceTier: 'drahsie',
                calories: 270,
                protein: 22,
                carbs: 24,
                fats: 9,
                time: '3 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['200g skyru (Arla / Isey)', '10g lyofilizovaných malín', '15g mandlí', '1 lyžička medu'],
                steps: ['Skyr vyklopte do misky.', 'Posypte lyofilizovaným ovocím a nasekanými mandľami.', 'Polejte medom.'],
                tags: ['ľahké', 'sladké', 'studené', 'syr']
            },
            {
                id: 'd_drh_3',
                name: 'Burrata s cherry paradajkami a pestom',
                description: 'Luxusná talianska desiata — krémová burrata s polosušenými paradajkami a domácim bazalkovým pestom.',
                price: 4.20,
                priceTier: 'drahsie',
                calories: 380,
                protein: 16,
                carbs: 10,
                fats: 30,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['1 ks burrata (125g)', '8 ks cherry paradajok', '1 lyžička bazalkového pesta', 'Olivový olej, hrubozrnná soľ, čerstvá bazalka'],
                steps: ['Burratu položte do stredu tanieru.', 'Cherry paradajky rozpolte a obložte.', 'Polejte pestom a olivovým olejom, dosoľte.'],
                tags: ['ľahké', 'slané', 'studené', 'syr', 'zelenina']
            }
        ]
    },
    obed: {
        lacnejsie: [
            {
                id: 'o_lac_1',
                name: 'Šošovicový prívarok s vajíčkom',
                description: 'Hustý tradičný prívarok zo hnedej šošovice ochutený bobkovým listom a octom, podávaný s dvoma uvarenými vajíčkami.',
                price: 1.40,
                priceTier: 'lacnejsie',
                calories: 490,
                protein: 31,
                carbs: 48,
                fats: 16,
                time: '35 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '100g suchej hnedej šošovice',
                    '2 ks vajcia',
                    '1 ks stredný zemiak (nastrúhaný na zahustenie)',
                    '1 strúčik cesnaku',
                    '1 ks bobkový list',
                    '1 lyžica octu, soľ, čierne korenie'
                ],
                steps: [
                    'Šošovicu prepláchnite a dajte variť do hrnca s vodou tak, aby bola tesne nad šošovicou.',
                    'Pridajte bobkový list a varte cca 20 minút do polozmäknutia.',
                    'Pridajte nastrúhaný zemiak, prelisovaný cesnak, soľ a korenie. Varte ďalších 10-15 minút, kým šošovica a zemiak nezmäknú a prívarok nezhustne.',
                    'Medzitým uvarte vajíčka natvrdo (cca 8-9 minút).',
                    'Prívarok odstavte, dochuťte octom a podávajte s olúpanými vajíčkami rozpolenými navrchu.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'vajcia', 'zelenina']
            },
            {
                id: 'o_lac_2',
                name: 'Tuniakové cestoviny s paradajkovou omáčkou',
                description: 'Rýchly obed z kvalitných semolinových cestovín s konzervovaným tuniakom v paradajkovej omáčke s bylinkami.',
                price: 1.80,
                priceTier: 'lacnejsie',
                calories: 520,
                protein: 28,
                carbs: 78,
                fats: 8,
                time: '15 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '100g špagiet alebo iných cestovín',
                    '80g tuniaka vo vlastnej šťave (konzerva)',
                    '150g pasírovaných paradajok (passata)',
                    '1 lyžička olivového oleja',
                    '1 strúčik cesnaku, sušená bazalka',
                    'Soľ, čierne korenie'
                ],
                steps: [
                    'Cestoviny uvarte v osolenej vode podľa návodu al dente.',
                    'Na panvici na olivovom oleji krátko osmažte nakrájaný cesnak.',
                    'Prilejte pasírované paradajky, pridajte bazalku, soľ, korenie a nechajte 5 minút prebublať.',
                    'Pridajte scedeného tuniaka a zľahka premiešajte.',
                    'Cestoviny sceďte a rovno na panvici premiešajte s pripravenou omáčkou.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'ryba', 'cestoviny']
            },
            {
                id: 'o_lac_3',
                name: 'Zemiakové placky so zakysanou smotanou',
                description: 'Tradičné lacné slovenské placky zo strúhaných zemiakov, vyprážané na troche oleja, podávané so zakysankou.',
                price: 1.20,
                priceTier: 'lacnejsie',
                calories: 480,
                protein: 12,
                carbs: 62,
                fats: 18,
                time: '25 min',
                difficulty: 'Jednoduché',
                ingredients: ['400g zemiakov', '1 ks vajce', '2 lyžice hladkej múky', '2 strúčiky cesnaku', '50g zakysanej smotany', 'Olej na vyprážanie, soľ, majoránka'],
                steps: ['Zemiaky postrúhajte na jemnom strúhadle a vytlačte vodu.', 'Pridajte vajce, múku, prelisovaný cesnak, soľ a majoránku.', 'Na rozpálenom oleji vyprážajte placky z oboch strán do zlatista.', 'Podávajte so zakysanou smotanou.'],
                tags: ['sýte', 'slané', 'teplé', 'zelenina']
            }
        ],
        standard: [
            {
                id: 'o_std_1',
                name: 'Kuracie prsia s ryžou a pečenou zeleninou',
                description: 'Fitness klasika - marinované kuracie prsia grilované nasucho, podávané s dusenou ryžou a šťavnatou pečenou zeleninou.',
                price: 2.80,
                priceTier: 'standard',
                calories: 540,
                protein: 42,
                carbs: 65,
                fats: 10,
                time: '30 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '150g kuracích pŕs',
                    '75g surovej jazmínovej ryže',
                    '100g cukety a mrkvy',
                    '1 lyžica olivového oleja',
                    'Korenie na pečené kura, soľ'
                ],
                steps: [
                    'Ryžu prepláchnite a dajte dusiť (na 1 diel ryže dajte 1.5 dielu vody, štipku soli) na cca 15 minút.',
                    'Kuracie prsia nakrájajte na rezne, potrite polovicou oleja a posypte korením.',
                    'Zeleninu nakrájajte na kolieska, zľahka osoľte a potrite zvyškom oleja.',
                    'Na panvici opečte kuracie mäso z oboch strán (cca 4 minúty z každej strany) do zlatista.',
                    'Zeleninu upečte na panvici alebo v rúre.',
                    'Podávajte mäso s kôpkou ryže a pečenou zeleninou.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'mäso', 'ryža', 'zelenina']
            },
            {
                id: 'o_std_2',
                name: 'Bryndzové halušky so slaninkou',
                description: 'Národné slovenské jedlo — zemiakové halušky s pravou bryndzou a opraženou slaninkou.',
                price: 2.40,
                priceTier: 'standard',
                calories: 620,
                protein: 24,
                carbs: 68,
                fats: 28,
                time: '30 min',
                difficulty: 'Stredne náročné',
                ingredients: ['300g zemiakov', '120g hladkej múky', '1 ks vajce', '80g bryndze', '50g údenej slaniny', 'Soľ, pažítka'],
                steps: ['Zemiaky postrúhajte, zmiešajte s múkou, vajcom a soľou na cesto.', 'Cez halušečník hádžte do vriacej osolenej vody a varte 3 min.', 'Slaninu opečte na panvici dochrumkava.', 'Halušky sceďte, premiešajte s bryndzou rozriedenou trochou vody zo slaniny.', 'Posypte slaninou a pažítkou.'],
                tags: ['sýte', 'slané', 'teplé', 'syr', 'zelenina']
            },
            {
                id: 'o_std_3',
                name: 'Kuracia tortilla wrap s cesnakovým dipom',
                description: 'Fitness wrap z celozrnnej tortilly s grilovaným kuraťom, čerstvou zeleninou a domácim jogurtovým dipom.',
                price: 2.90,
                priceTier: 'standard',
                calories: 510,
                protein: 38,
                carbs: 52,
                fats: 14,
                time: '20 min',
                difficulty: 'Jednoduché',
                ingredients: ['1 ks celozrnná tortilla', '150g kuracích pŕs', '50g ľadového šalátu', '1/2 ks paradajka', '1/4 ks červená cibuľa', '60g bieleho jogurtu', '1 strúčik cesnaku', 'Soľ, korenie'],
                steps: ['Kuracie prsia nakrájajte na prúžky, osoľte, okoreňte a opečte na panvici.', 'Z jogurtu, cesnaku a soli pripravte dip.', 'Tortillu zľahka nahrejte na suchej panvici.', 'Natrite dipom, naložte kura, šalát, paradajku a cibuľu.', 'Pevne zaviňte a podávajte.'],
                tags: ['sýte', 'slané', 'teplé', 'mäso', 'wrap', 'zelenina']
            }
        ],
        drahsie: [
            {
                id: 'o_drh_1',
                name: 'Hovädzí steak s pečenými zemiakmi a špargľou',
                description: 'Prémiový hovädzí steak (napr. sviečková alebo rib-eye) pripravený medium, podávaný s chrumkavými baby zemiakmi a zelenou špargľou.',
                price: 7.90,
                priceTier: 'drahsie',
                calories: 620,
                protein: 48,
                carbs: 38,
                fats: 29,
                time: '25 min',
                difficulty: 'Stredne náročné',
                ingredients: [
                    '200g hovädzieho steaku (Rib-eye alebo sviečková)',
                    '200g baby zemiakov',
                    '100g čerstvej zelenej špargle',
                    '15g masla',
                    '1 lyžica olivového oleja',
                    '2 strúčiky cesnaku, vetvička rozmarínu',
                    'Hrubozrnná soľ, farebné korenie'
                ],
                steps: [
                    'Zemiaky umyte, rozpolte, osoľte, pokvapkajte olejom a dajte piecť do rúry na 200 °C na 25 minút.',
                    'Steak vyberte z chladničky aspoň 30 minút pred tepelnou úpravou.',
                    'Špargľu očistite (odlomte drevnaté konce) a opečte na troche olivového oleja na panvici cca 5 minút.',
                    'Rozpáľte suchú liatinovú panvicu. Steak potrite trochou oleja a opekajte 2.5 minúty z každej strany pre medium-rare.',
                    'Na panvicu pridajte maslo, roztlačený cesnak, rozmarín a lyžicou prelievajte steak rozpusteným voňavým maslom cca 1 minútu.',
                    'Steak vyberte a pred krájaním ho nechajte 5 minút odpočívať na teplom tanieri.',
                    'Posypte hrubozrnnou soľou a čerstvo mletým korením, podávajte so zemiakmi a špargľou.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'mäso', 'zelenina']
            },
            {
                id: 'o_drh_2',
                name: 'Pečený losos s quinoou a brokolicou',
                description: 'Fitness gurmán — pečené filé z lososa na bylinkách s quinoou a paranou brokolicou s citrónom.',
                price: 6.80,
                priceTier: 'drahsie',
                calories: 580,
                protein: 42,
                carbs: 48,
                fats: 22,
                time: '25 min',
                difficulty: 'Jednoduché',
                ingredients: ['180g filé z lososa', '80g surovej quinoy', '200g brokolice', '1 ks citrón', '1 lyžica olivového oleja', 'Soľ, čierne korenie, kôpor'],
                steps: ['Quinou opláchnite a varte 15 min v 1.5-násobku osolenej vody.', 'Lososa potrite olejom, soľou a kôprom, pečte v rúre 180 °C cca 12 min.', 'Brokolicu povarte na pare 5 minút, kým je al dente.', 'Servírujte s plátkom citróna.'],
                tags: ['sýte', 'slané', 'teplé', 'ryba', 'zelenina']
            },
            {
                id: 'o_drh_3',
                name: 'Confit kačacie stehno so zemiakovou kašou',
                description: 'Francúzska klasika — konfitované kačacie stehno s maslovou zemiakovou kašou a karamelizovanou cibuľou.',
                price: 8.50,
                priceTier: 'drahsie',
                calories: 720,
                protein: 38,
                carbs: 52,
                fats: 38,
                time: '40 min',
                difficulty: 'Stredne náročné',
                ingredients: ['1 ks kačacie stehno confit (vákuové)', '300g zemiakov', '40ml smotany na šľahanie', '20g masla', '1 ks červená cibuľa', '1 lyžica balzamika'],
                steps: ['Zemiaky uvarte a roztlačte s maslom a smotanou.', 'Kačacie stehno opečte z kožky dochrumkava (cca 5 min) a dohrejte v rúre 180 °C 10 min.', 'Cibuľu nakrájajte na pierka, opečte s balzamikom dosklovita.', 'Servírujte stehno na kaši, ozdobte cibuľou.'],
                tags: ['sýte', 'slané', 'teplé', 'mäso', 'zelenina']
            }
        ]
    },
    olovrant: {
        lacnejsie: [
            {
                id: 'ol_lac_1',
                name: 'Kyslé mlieko s celozrnným rožkom',
                description: 'Jednoduchý tradičný olovrant pre dobré trávenie. Studené kefírové mlieko s čerstvým celozrnným pečivom.',
                price: 0.70,
                priceTier: 'lacnejsie',
                calories: 240,
                protein: 10,
                carbs: 38,
                fats: 4,
                time: '2 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '250ml kefírového alebo acidofilného mlieka',
                    '1 ks celozrnný rožok (50g)'
                ],
                steps: [
                    'Acidofilné mlieko dobre pretrepte a nalejte do pohára.',
                    'Podávajte vychladené s celozrnným rožkom.'
                ],
                tags: ['ľahké', 'slané', 'studené', 'pečivo']
            },
            {
                id: 'ol_lac_2',
                name: 'Jablko s burskými orieškami',
                description: 'Klasická lacná desiata — čerstvé jablko s hrsťou nesolených burských orieškov.',
                price: 0.50,
                priceTier: 'lacnejsie',
                calories: 220,
                protein: 6,
                carbs: 26,
                fats: 12,
                time: '1 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['1 ks väčšie jablko', '20g burských orieškov (nesolených)'],
                steps: ['Jablko umyte a nakrájajte na mesiačiky.', 'Podávajte s hŕstkou orieškov.'],
                tags: ['ľahké', 'sladké', 'studené']
            },
            {
                id: 'ol_lac_3',
                name: 'Mrkvové paličky s hummusom',
                description: 'Zdravá zelenina s domácim hummusom z cíceru — chrumkavé, sýte a bohaté na vlákninu.',
                price: 0.90,
                priceTier: 'lacnejsie',
                calories: 210,
                protein: 8,
                carbs: 24,
                fats: 9,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['2 ks mrkva', '80g hummusu (cícer, tahini, citrón, olej)', 'Sezamové semienka'],
                steps: ['Mrkvu olúpte a nakrájajte na paličky.', 'Hummus vyklopte do misky a posypte sezamom.', 'Mrkvu namáčajte do hummusu.'],
                tags: ['ľahké', 'slané', 'studené', 'zelenina']
            }
        ],
        standard: [
            {
                id: 'ol_std_1',
                name: 'Proteínový banánový kokteil',
                description: 'Rýchly po-tréningový šejk. Rozmixovaný proteín s mliekom, banánom a lyžičkou arašidového masla.',
                price: 1.50,
                priceTier: 'standard',
                calories: 330,
                protein: 28,
                carbs: 34,
                fats: 9,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '30g srvátkového proteínu',
                    '200ml polotučného mlieka',
                    '1/2 ks zrelého banánu',
                    '10g arašidového masla (1/2 lyžičky)'
                ],
                steps: [
                    'Do mixéra nalejte mlieko.',
                    'Pridajte nakrájaný banán, arašidové maslo a odmerku proteínu.',
                    'Dôkladne rozmixujte do hladka a hneď konzumujte.'
                ],
                tags: ['ľahké', 'sladké', 'studené', 'smoothie']
            },
            {
                id: 'ol_std_2',
                name: 'Cottage cheese s ananásom a mätou',
                description: 'Osviežujúca proteínová desiata — cottage syr s čerstvým ananásom a lístkami mäty.',
                price: 1.80,
                priceTier: 'standard',
                calories: 240,
                protein: 22,
                carbs: 22,
                fats: 5,
                time: '3 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['180g cottage syra', '80g čerstvého ananásu', 'Čerstvá mäta'],
                steps: ['Cottage vyklopte do misky.', 'Ananás nakrájajte na kocky a primiešajte.', 'Ozdobte lístkami mäty.'],
                tags: ['ľahké', 'sladké', 'studené', 'syr']
            },
            {
                id: 'ol_std_3',
                name: 'Energetické guľôčky z datlí, ovsa a kakaa',
                description: 'Bezpečenia, ručne tvarované guľôčky z mäkkých datlí, ovsa a kvalitného kakaa — ideálne pred tréningom.',
                price: 1.60,
                priceTier: 'standard',
                calories: 280,
                protein: 8,
                carbs: 44,
                fats: 8,
                time: '10 min',
                difficulty: 'Jednoduché',
                ingredients: ['6 ks mäkkých datlí', '40g ovsených vločiek', '10g kakaa', '15g mandlí', '1 lyžička kokosových lupienkov'],
                steps: ['Datle, vločky, kakao a mandle rozmixujte do hutnej hmoty.', 'Tvarujte malé guľky a obaľte v kokose.', 'Dajte stuhnúť do chladničky aspoň 15 minút.'],
                tags: ['sýte', 'sladké', 'studené']
            }
        ],
        drahsie: [
            {
                id: 'ol_drh_1',
                name: 'Ryžové chlebíky s prosciuttom a mozzarellou',
                description: 'Prémiový slaný olovrant. Chrumkavé ryžové chlebíky obložené talianskym prosciuttom crudo, krémovou byvolou mozzarellou a bazalkou.',
                price: 2.90,
                priceTier: 'drahsie',
                calories: 290,
                protein: 20,
                carbs: 22,
                fats: 13,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: [
                    '3 ks ryžové chlebíky natural',
                    '40g Prosciutto di Parma / crudo',
                    '60g čerstvej mozzarelly (polovica balenia)',
                    '3 ks sušené paradajky v oleji',
                    'Čerstvé lístky bazalky'
                ],
                steps: [
                    'Ryžové chlebíky rozložte na tanier.',
                    'Na každý položte plátok jemne natrhaného prosciutta.',
                    'Mozzarellu nakrájajte na plátky a položte na prosciutto.',
                    'Ozdobte nadrobno nakrájanými sušenými paradajkami a lístkami čerstvej bazalky.'
                ],
                tags: ['ľahké', 'slané', 'studené', 'syr', 'ryža']
            },
            {
                id: 'ol_drh_2',
                name: 'Skyr bowl s domácou granolou a malinami',
                description: 'Vrstvený skyr bowl s chrumkavou domácou granolou, čerstvými malinami a včelím medom.',
                price: 2.80,
                priceTier: 'drahsie',
                calories: 320,
                protein: 24,
                carbs: 38,
                fats: 8,
                time: '5 min',
                difficulty: 'Veľmi jednoduché',
                ingredients: ['200g skyru', '30g domácej granoly', '60g čerstvých malín', '1 lyžička medu'],
                steps: ['Skyr vyklopte do misky.', 'Posypte granolou, ozdobte malinami.', 'Polejte medom.'],
                tags: ['ľahké', 'sladké', 'studené', 'syr']
            },
            {
                id: 'ol_drh_3',
                name: 'Avokádový tartar na kváskovom toaste',
                description: 'Kreatívna desiata — kockovaný avokádový tartar s limetkou a chilli na opečenom kváskovom toaste.',
                price: 3.20,
                priceTier: 'drahsie',
                calories: 380,
                protein: 8,
                carbs: 32,
                fats: 24,
                time: '8 min',
                difficulty: 'Jednoduché',
                ingredients: ['1 ks zrelé avokádo', '1 krajec kváskového chleba', '1/2 ks limetka', 'Chilli vločky, soľ, koriander'],
                steps: ['Avokádo nakrájajte na drobné kocky.', 'Premiešajte so šťavou z limetky, soľou a chilli.', 'Chlieb opečte na panvici a tartar naložte na vrch, ozdobte koriandrom.'],
                tags: ['ľahké', 'slané', 'teplé', 'pečivo']
            }
        ]
    },
    vecera: {
        lacnejsie: [
            {
                id: 'v_lac_1',
                name: 'Šošovicová polievka s údeným mäsom',
                description: 'Hustá polievka zo zelenej šošovice s kúskom lacného údeného mäsa a koreňovou zeleninou. Zasýti a pritom je kaloricky úsporná.',
                price: 1.90,
                priceTier: 'lacnejsie',
                calories: 350,
                protein: 24,
                carbs: 42,
                fats: 8,
                time: '45 min',
                difficulty: 'Stredne náročné',
                ingredients: [
                    '80g zelenej šošovice',
                    '80g údeného bravčového pleca alebo rebrá',
                    '1 ks mrkva',
                    '1/2 ks petržlenu',
                    '1 ks zemiak',
                    'Majoránka, cesnak, soľ, čierne korenie'
                ],
                steps: [
                    'Šošovicu vopred namočte na 1 hodinu.',
                    'Údené mäso dajte variť do hrnca s vodou spolu so šošovicou a bobkovým listom.',
                    'Po 25 minútach pridajte nakrájanú koreňovú zeleninu a zemiak na kocky.',
                    'Varte, kým zelenina a šošovica nezmäknú.',
                    'Mäso vyberte, nakrájajte na kocky a vráťte do polievky.',
                    'Dochuťte prelisovaným cesnakom a sušenou majoránkou.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'polievka', 'zelenina']
            },
            {
                id: 'v_lac_2',
                name: 'Vajcová omeleta so špenátom a paradajkami',
                description: 'Rýchla a výživná omeleta bohatá na bielkoviny s čerstvou zeleninou. Ideálna ľahká večera s nízkym obsahom kalórií.',
                price: 1.50,
                priceTier: 'lacnejsie',
                calories: 280,
                protein: 18,
                carbs: 6,
                fats: 19,
                time: '12 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '3 ks čerstvé vajcia',
                    '50g špenátu (mrazeného alebo čerstvého)',
                    '1 ks stredná paradajka (nakrájaná)',
                    '1/2 ks cibule',
                    '1 lyžička oleja',
                    'Soľ, čierne korenie'
                ],
                steps: [
                    'Na panvici na troche oleja speňte nakrájanú cibuľku.',
                    'Pridajte špenát a nakrájanú paradajku a nechajte cca 3 minúty podusiť.',
                    'V miske vidličkou rozšľahajte vajcia so soľou a korením.',
                    'Vylejte vajcia rovnomerne na panvicu k zelenine.',
                    'Na miernom ohni pod pokrievkou pečte cca 5 minút, kým omeleta nestuhne.',
                    'Podávajte teplé samotné alebo s kúskom pečiva.'
                ],
                tags: ['ľahké', 'slané', 'teplé', 'vajcia', 'zelenina']
            },
            {
                id: 'v_lac_3',
                name: 'Cesnaková polievka s vajcom a hriankami',
                description: 'Tradičná slovenská cesnačka — voňavá polievka z roztlačeného cesnaku, rozšľahaného vajca a opečených hrianok.',
                price: 0.90,
                priceTier: 'lacnejsie',
                calories: 290,
                protein: 14,
                carbs: 32,
                fats: 12,
                time: '15 min',
                difficulty: 'Jednoduché',
                ingredients: ['600ml vody', '4 strúčiky cesnaku', '1 ks vajce', '2 krajce chleba', '1 lyžica oleja', 'Soľ, rasca, majoránka'],
                steps: ['Vodu privarte s rascou, soľou a majoránkou.', 'Prilejte prelisovaný cesnak a varte 5 min.', 'Rozšľahané vajce vlejte tenkým prúdom za stáleho miešania.', 'Chlieb opečte na panvici dochrumkava.', 'Polievku nalejte do misy s hriankami navrchu.'],
                tags: ['ľahké', 'slané', 'teplé', 'polievka', 'vajcia', 'pečivo']
            }
        ],
        standard: [
            {
                id: 'v_std_1',
                name: 'Kuracie prsia s dusenou zeleninou',
                description: 'Chudé kuracie prsia pečené v rúre so sezónnou zeleninou a korením. Nízkokalorické, sýte a jednoduché na prípravu.',
                price: 2.80,
                priceTier: 'standard',
                calories: 320,
                protein: 38,
                carbs: 12,
                fats: 10,
                time: '25 min',
                difficulty: 'Jednoduché',
                ingredients: [
                    '400g kuracích pŕs (bez kosti a kože - rozdelené na 2 porcie)',
                    '1 lyžica olivového oleja',
                    '1 stredná cuketa (nakrájaná na kolieska)',
                    '1 stredná mrkva (nakrájaná na prúžky)',
                    '1 červená paprika (nakrájaná na kocky)',
                    '1 stredná cibuľa (nakrájaná na polokolieska)',
                    '2 strúčiky cesnaku (nadrobno)',
                    '1 lyžička sladkej papriky',
                    '1/2 lyžičky cesnakového prášku',
                    '1/2 lyžičky sušeného tymiánu',
                    'Soľ, čierne korenie'
                ],
                steps: [
                    'Rúru predhrejte na 200 °C (horúci vzduch 180 °C).',
                    'Kuracie prsia umyte, osušte papierovou utierkou a jemne naklepte na rovnomernú hrúbku asi 2 cm.',
                    'V miske zmiešajte olivový olej, sladkú papriku, cesnakový prášok, tymián, soľ a čierne korenie.',
                    'Touto zmesou dôkladne potrite kuracie prsia z oboch strán a nechajte marinovať aspoň 10 minút.',
                    'Zeleninu (cuketu, mrkvu, papriku, cibuľu a cesnak) nakrájajte a rozložte na plech vystlaný papierom na pečenie. Pokvapkajte trochou oleja, osoľte a premiešajte.',
                    'Na zeleninu poukladajte marinované kuracie prsia.',
                    'Vložte plech do predhriatej rúry a pečte 20–25 minút, kým kuracie prsia nie sú prepečené (vnútorná teplota 75 °C) a zelenina mäkká.',
                    'Po upečení nechajte mäso 5 minút odpočívať, aby sa šťavy ustálili.'
                ],
                tags: ['ľahké', 'slané', 'teplé', 'mäso', 'zelenina']
            },
            {
                id: 'v_std_2',
                name: 'Pečená treska so zemiakmi a špenátom',
                description: 'Ľahké rybie filé pečené s citrónom, podávané s opekanými baby zemiakmi a dusenou špenátovou prílohou.',
                price: 3.40,
                priceTier: 'standard',
                calories: 460,
                protein: 36,
                carbs: 42,
                fats: 14,
                time: '30 min',
                difficulty: 'Jednoduché',
                ingredients: ['180g filé z tresky', '250g baby zemiakov', '100g čerstvého špenátu', '1/2 ks citrón', '1 lyžica olivového oleja', 'Cesnak, soľ, biele korenie'],
                steps: ['Zemiaky rozpolte a dajte piecť do rúry 200 °C na 25 min.', 'Tresku posoľte, polejte olejom a citrónom a pečte 12 min pri 190 °C.', 'Špenát zľahka podusíte s cesnakom na panvici.', 'Servírujte tresku so zemiakmi a špenátom.'],
                tags: ['ľahké', 'slané', 'teplé', 'ryba', 'zelenina']
            },
            {
                id: 'v_std_3',
                name: 'Cuketové fašírky s jogurtovým dipom',
                description: 'Vegetariánska večera — pečené fašírky z cukety, syra feta a vajca s osviežujúcim cesnakovo-jogurtovým dipom.',
                price: 2.60,
                priceTier: 'standard',
                calories: 410,
                protein: 22,
                carbs: 30,
                fats: 22,
                time: '30 min',
                difficulty: 'Stredne náročné',
                ingredients: ['1 ks veľká cuketa', '60g syra feta', '1 ks vajce', '4 lyžice strúhanky', '120g bieleho jogurtu', '1 strúčik cesnaku', 'Mäta, soľ, korenie'],
                steps: ['Cuketu nastrúhajte a vytlačte vodu.', 'Zmiešajte s vajcom, drobeným fetou a strúhankou.', 'Tvarujte fašírky a pečte v rúre 200 °C na 20 min.', 'Z jogurtu, cesnaku a mäty pripravte dip.', 'Podávajte fašírky s dipom.'],
                tags: ['ľahké', 'slané', 'teplé', 'syr', 'zelenina', 'vajcia']
            }
        ],
        drahsie: [
            {
                id: 'v_drh_1',
                name: 'Prémiový hovädzí burger s hranolkami',
                description: 'Domáci burger z vyzretého hovädzieho mäsa v maslovej brioškovej žemli s cheddarom, domácou omáčkou a chrumkavými hranolkami.',
                price: 6.50,
                priceTier: 'drahsie',
                calories: 780,
                protein: 45,
                carbs: 68,
                fats: 32,
                time: '30 min',
                difficulty: 'Stredne náročné',
                ingredients: [
                    '150g mletého vyzretého hovädzieho mäsa',
                    '1 ks maslová žemľa (brioška)',
                    '1 plátok pravého cheddaru',
                    '1 plátok slaniny',
                    'Paradajka, kyslá uhorka, šalát',
                    '150g zemiakových hranoliek na pečenie',
                    '1 lyžica majonézy a kečupu (omáčka)'
                ],
                steps: [
                    'Hranolky osoľte, rozložte na plech a dajte piecť do rúry na 200 °C na 20 minút.',
                    'Z mletého mäsa vytvarujte vyšší kruhový filet, osoľte a okoreňte z oboch strán.',
                    'Na rozpálenej panvici opečte plátok slaniny do chrumkava, odložte nabok.',
                    'Na tuku zo slaniny opekajte mäso (cca 3 minúty z každej strany). V poslednej minúte položte na mäso cheddar, zakryte pokrievkou, aby sa roztopil.',
                    'Žemľu rozkrojte a opečte na panvici do chrumkava.',
                    'Spodnú žemľu potrite omáčkou (majonéza + kečup), položte šalát, plátok paradajky, mäso so syrom, slaninu, uhorku a priklopte vrchnou žemľou.',
                    'Podávajte s upečenými horúcimi hranolkami.'
                ],
                tags: ['sýte', 'slané', 'teplé', 'mäso', 'syr', 'wrap', 'pečivo'] // wrap priradený ako blízky typ fastfood/burger pečiva
            },
            {
                id: 'v_drh_2',
                name: 'Grilované krevety s cesnakovým maslom a špenátom',
                description: 'Luxusná večera — tigrie krevety pečené v cesnakovom masle s vetvičkou rozmarínu, podávané na dusenom špenáte.',
                price: 7.20,
                priceTier: 'drahsie',
                calories: 420,
                protein: 36,
                carbs: 12,
                fats: 26,
                time: '20 min',
                difficulty: 'Stredne náročné',
                ingredients: ['200g lúpaných tigrích kreviet', '30g masla', '3 strúčiky cesnaku', '150g čerstvého špenátu', '1/2 ks citrón', 'Petržlenová vňať, soľ, chilli vločky'],
                steps: ['Maslo rozohrejte s prelisovaným cesnakom a chilli.', 'Pridajte krevety a opekajte 2 min z každej strany.', 'Dochuťte soľou a šťavou z citróna.', 'Špenát zľahka podusíte na olivovom oleji.', 'Servírujte krevety na špenáte, posypte petržlenom.'],
                tags: ['sýte', 'slané', 'teplé', 'ryba', 'zelenina']
            },
            {
                id: 'v_drh_3',
                name: 'Tuniakový steak so sezamom a wok zeleninou',
                description: 'Ázijsky inšpirovaná večera — tuniakový steak v sezamovej kôrke, podávaný s rýchlo opraženou wok zeleninou v sójovej omáčke.',
                price: 8.40,
                priceTier: 'drahsie',
                calories: 520,
                protein: 44,
                carbs: 28,
                fats: 24,
                time: '20 min',
                difficulty: 'Stredne náročné',
                ingredients: ['200g tuniakového steaku (sashimi grade)', '2 lyžice sezamových semienok', '150g wok zeleniny (paprika, cuketa, mrkva, brokolica)', '2 lyžice sójovej omáčky', '1 lyžica sezamového oleja', 'Zázvor, cesnak, jarná cibuľka'],
                steps: ['Tuniaka obaľte v sezame, na rozpálenej panvici opekajte 45 sek z každej strany (rare).', 'Wok zeleninu prudko opečte na sezamovom oleji so zázvorom a cesnakom.', 'Zalejte sójovou omáčkou a krátko premiešajte.', 'Tuniaka nakrájajte na hrubšie plátky a servírujte na zelenine.', 'Posypte jarnou cibuľkou.'],
                tags: ['sýte', 'slané', 'teplé', 'ryba', 'zelenina']
            }
        ]
    }
};

// --- 2. STATE MANAGEMENT & LOCALSTORAGE ---
const DEFAULT_STATE = {
    profile: {
        weight: 80,
        targetWeight: 75,
        goal: 'chudnutie', // 'chudnutie', 'udrziavanie', 'budovanie'
        diet: 'vsejed', // 'vsejed', 'vegetarian', 'bezlaktozovy', 'bezlepkovy'
        targets: {
            calories: 2000,
            protein: 140,
            carbs: 220,
            fats: 65
        }
    },
    todayLog: [], // logged meals today
    frequentMeals: [
        // prefilled for the first run so that option 4 is not empty
        { name: 'Kuracie nugetky s ryžou', calories: 510, protein: 38, carbs: 60, fats: 12, timeOfDay: 'obed', count: 5 },
        { name: 'Tvaroh s banánom', calories: 280, protein: 24, carbs: 32, fats: 2, timeOfDay: 'ranajky', count: 6 },
        { name: 'Proteínový šejk', calories: 140, protein: 25, carbs: 4, fats: 2, timeOfDay: 'olovrant', count: 4 },
        { name: 'Miešaný šalát s mozarellou', calories: 310, protein: 18, carbs: 12, fats: 20, timeOfDay: 'vecera', count: 3 }
    ],
    lastUpdatedDate: ''
};

let appState = {};

function initAppState() {
    const saved = localStorage.getItem('mealmate_state');
    const todayStr = new Date().toDateString();
    
    if (saved) {
        appState = JSON.parse(saved);
        // Reset daily log if a new day has started
        if (appState.lastUpdatedDate !== todayStr) {
            appState.todayLog = [];
            appState.lastUpdatedDate = todayStr;
            saveState();
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        appState.lastUpdatedDate = todayStr;
        recalculateLimits(false);
        saveState();
    }
}

function saveState() {
    localStorage.setItem('mealmate_state', JSON.stringify(appState));
}

// Recalculates limits based on Harris-Benedict equation (BMR estimate) and goals
function recalculateLimits(shouldSave = true) {
    const w = parseFloat(appState.profile.weight) || 80;
    const g = appState.profile.goal;
    
    // Estimate BMR based on generic weight (assumed age 28, height 178cm, moderate activity factor 1.375)
    // Generic base: BMR approx 10 * weight + 6.25 * 178 - 5 * 28 + 5 = 10 * w + 975
    const baseEnergy = Math.round((10 * w + 975) * 1.375);
    
    let targetCal = baseEnergy;
    let pRatio = 1.8; // g of protein per kg of bodyweight
    let fRatio = 0.8; // g of fats per kg of bodyweight
    
    if (g === 'chudnutie') {
        targetCal = baseEnergy - 400; // Caloric deficit
        pRatio = 2.0; // Higher protein to preserve muscle
        fRatio = 0.8;
    } else if (g === 'budovanie') {
        targetCal = baseEnergy + 300; // Caloric surplus
        pRatio = 2.2;
        fRatio = 1.0;
    } else if (g === 'rekompozicia') {
        // Body recomposition — mierny deficit + vysoké bielkoviny
        targetCal = baseEnergy - 150;
        pRatio = 2.3;
        fRatio = 0.9;
    } else {
        // Udrziavanie
        targetCal = baseEnergy;
        pRatio = 1.8;
        fRatio = 0.9;
    }
    
    // Safety lower cap
    if (targetCal < 1200) targetCal = 1200;
    
    const targetProt = Math.round(w * pRatio);
    const targetFat = Math.round(w * fRatio);
    
    // Carbs make up the rest of the calories
    // 1g Protein = 4 kcal, 1g Fat = 9 kcal, 1g Carb = 4 kcal
    const proteinKcal = targetProt * 4;
    const fatKcal = targetFat * 9;
    const remainingKcal = targetCal - (proteinKcal + fatKcal);
    const targetCarbs = Math.max(50, Math.round(remainingKcal / 4));
    
    appState.profile.targets = {
        calories: Math.round(targetCal),
        protein: targetProt,
        carbs: targetCarbs,
        fats: targetFat
    };
    
    if (shouldSave) {
        saveState();
    }
}


// --- 3. SMART SLOVAK NUTRITION PARSER ---
// A micro NLP keyword parser specifically for Slovak gastronomy
const SLOVAK_INGREDIENTS_DICT = [
    // BIEĽKOVINY (Mäsá, mliečne výrobky, vajcia)
    { keys: ['kuracie', 'kura', 'kuracieho', 'kuracich', 'nugetky', 'prsia', 'prsiach', 'hydina'], p: 25, c: 0, f: 2, cal: 120, name: 'Kuracie prsia' },
    { keys: ['bravčové', 'bravcove', 'panenka', 'krkovička', 'plece', 'rebro', 'slanina', 'slaninka', 'šunka', 'sunka'], p: 18, c: 1, f: 16, cal: 220, name: 'Bravčové mäso / Šunka' },
    { keys: ['hovädzie', 'hovedzie', 'steak', 'burger', 'sviečková', 'svieckova', 'mleté', 'mlete'], p: 22, c: 0, f: 14, cal: 210, name: 'Hovädzie mäso' },
    { keys: ['losos', 'lososom', 'tuniak', 'tuniakom', 'ryba', 'ryby', 'pstruh', 'makrela', 'prosciutto'], p: 20, c: 0, f: 12, cal: 190, name: 'Ryby / Lahôdky' },
    { keys: ['tvaroh', 'tvarohom', 'tvarohu'], p: 16, c: 4, f: 1, cal: 90, name: 'Nízkotučný tvaroh' },
    { keys: ['jogurt', 'jogurtom', 'kefír', 'acidko', 'mlieko', 'mlieka', 'mliekom'], p: 4, c: 5, f: 2, cal: 60, name: 'Mliečne výrobky' },
    { keys: ['vajce', 'vajcia', 'vajíčka', 'vajciami', 'omeleta', 'praženica', 'prazenica'], p: 13, c: 1, f: 11, cal: 155, name: 'Vajíčka' },
    { keys: ['syr', 'syrom', 'cheddar', 'mozzarella', 'parmezán', 'parmezan', 'niva', 'eidam'], p: 22, c: 2, f: 22, cal: 300, name: 'Syr' },
    { keys: ['proteín', 'protein', 'srvátka', 'sejk', 'šejk', 'kokteil'], p: 80, c: 6, f: 3, cal: 370, name: 'Proteínový prášok' },

    // SACHARIDY (Prílohy, pečivo, sladidlá, ovocie)
    { keys: ['ryža', 'ryza', 'ryžou', 'ryzou'], p: 3, c: 78, f: 1, cal: 330, name: 'Ryža jazmínová' },
    { keys: ['zemiak', 'zemiaky', 'zemiakmi', 'hranolky', 'hranolkami', 'pyré', 'pyre', 'batáty', 'bataty'], p: 2, c: 20, f: 4, cal: 120, name: 'Zemiaky / Hranolky' },
    { keys: ['cestoviny', 'cestovinami', 'špagety', 'spagety', 'makaróny', 'penne'], p: 6, c: 72, f: 1, cal: 320, name: 'Cestoviny semolinové' },
    { keys: ['chlieb', 'chleba', 'chlebom', 'rožok', 'rožkom', 'rozok', 'žemľa', 'zemla', 'žemľa', 'toast', 'hrianka', 'hriankami', 'wrap', 'brioška', 'chlebíky'], p: 8, c: 52, f: 3, cal: 260, name: 'Pečivo / Chlieb' },
    { keys: ['vločky', 'vločiek', 'vlocky', 'kaša', 'kasa'], p: 12, c: 62, f: 6, cal: 350, name: 'Ovsené vločky' },
    { keys: ['banán', 'banan', 'banánom', 'bananom'], p: 1, c: 22, f: 0, cal: 90, name: 'Banán' },
    { keys: ['med', 'medom', 'cukor', 'cukrom', 'agáve', 'sirup', 'sirupom'], p: 0, c: 80, f: 0, cal: 320, name: 'Med / Slacidlo' },
    { keys: ['jablko', 'maliny', 'jahody', 'čučoriedky', 'cucoriedky', 'ovocie', 'ovocím', 'ovocim'], p: 1, c: 12, f: 0, cal: 50, name: 'Čerstvé ovocie' },

    // TUKY (Oleje, maslo, orechy, avokádo)
    { keys: ['avokádo', 'avokado', 'avokádom', 'avokadom'], p: 2, c: 8, f: 15, cal: 160, name: 'Avokádo' },
    { keys: ['orechy', 'orechmi', 'orechov', 'mandle', 'arašidy', 'arasidy', 'semienka', 'chia'], p: 18, c: 14, f: 52, cal: 600, name: 'Orechy & Semienka' },
    { keys: ['olej', 'olejom', 'maslo', 'masle', 'maslom'], p: 0, c: 0, f: 90, cal: 800, name: 'Zdravé tuky / Oleje' },
    
    // ZELENINA / ZÁKLADY (Nízke makrá)
    { keys: ['špenát', 'spenat', 'špenátom', 'paradajky', 'paradajka', 'paradajkami', 'cibuľa', 'cibula', 'cibuľka', 'cesnak', 'zelenina', 'zeleninou', 'mrkva', 'cuketa', 'paprika', 'špargľa', 'spargla', 'šalát', 'salat'], p: 1, c: 4, f: 0, cal: 22, name: 'Sezónna zelenina' }
];

function smartParseSlovakMeal(mealString) {
    const text = mealString.toLowerCase().trim();
    if (!text) return null;
    
    // Split into tokens
    const words = text.split(/[\s,.\-+]+/).filter(w => w.length > 2);
    
    let totalP = 0;
    let totalC = 0;
    let totalF = 0;
    let totalCal = 0;
    let detectedIngredients = [];
    
    // We match each keyword group
    SLOVAK_INGREDIENTS_DICT.forEach(item => {
        let isMatched = false;
        item.keys.forEach(key => {
            if (words.some(word => word.includes(key) || key.includes(word))) {
                isMatched = true;
            }
        });
        
        if (isMatched) {
            // Estimate standard portion grams for this matching category
            // (Typically e.g. 150g meat, 80g carbs, 10g oils, 100g dairy)
            let portionScale = 1.0;
            
            // Adjust scale slightly based on common portion keywords
            if (text.includes('veľký') || text.includes('dve') || text.includes('2ks') || text.includes('3ks') || text.includes('veľa')) {
                portionScale = 1.5;
            } else if (text.includes('malý') || text.includes('trocha') || text.includes('lyžička')) {
                portionScale = 0.5;
            }
            
            // Portions in grams represented:
            let g = 100; 
            if (item.name.includes('mäso') || item.name.includes('Ryby') || item.name.includes('Kuracie')) g = 130;
            else if (item.name.includes('tvaroh')) g = 180;
            else if (item.name.includes('Ryža') || item.name.includes('Cestoviny')) g = 70; // dry weight
            else if (item.name.includes('Pečivo')) g = 75;
            else if (item.name.includes('Vajíčka')) g = 120; // 2 large eggs
            else if (item.name.includes('Tuky') || item.name.includes('Orechy')) g = 20;
            else if (item.name.includes('Zelenina')) g = 150;
            
            totalP += (item.p * (g / 100)) * portionScale;
            totalC += (item.c * (g / 100)) * portionScale;
            totalF += (item.f * (g / 100)) * portionScale;
            totalCal += (item.cal * (g / 100)) * portionScale;
            
            detectedIngredients.push(item.name);
        }
    });
    
    // Fallback if no keywords matched (generate a realistic standard meal)
    if (detectedIngredients.length === 0) {
        // We look at the length of the string to generate a pseudo-random yet repeatable set of values
        const seed = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        totalCal = 350 + (seed % 300); // 350 - 650 kcal
        totalP = 15 + (seed % 25);    // 15 - 40g
        totalF = 6 + (seed % 15);      // 6 - 21g
        totalC = Math.round((totalCal - (totalP * 4) - (totalF * 9)) / 4);
        if (totalC < 5) totalC = 10;
        
        detectedIngredients.push('Mix rôznych surovín');
    } else {
        // Clean duplicates
        detectedIngredients = [...new Set(detectedIngredients)];
        
        // Final round
        totalP = Math.round(totalP);
        totalC = Math.round(totalC);
        totalF = Math.round(totalF);
        // Recalculate cal based on standard macros
        totalCal = Math.round((totalP * 4) + (totalC * 4) + (totalF * 9));
    }
    
    // Capitalize meal name
    const capitalizeName = mealString.charAt(0).toUpperCase() + mealString.slice(1);
    
    return {
        name: capitalizeName,
        calories: totalCal,
        protein: totalP,
        carbs: totalC,
        fats: totalF,
        ingredients: detectedIngredients
    };
}


// --- 4. DYNAMIC SUGGESTIONS GENERATOR ---
// Generates custom meal tips based on: Day period, filters clicked, and dietary preferences
function getCurrentTimeOfDay() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 10) return 'ranajky';
    if (hour >= 10 && hour < 12) return 'desiata';
    if (hour >= 12 && hour < 15) return 'obed';
    if (hour >= 15 && hour < 18) return 'olovrant';
    if (hour >= 18 && hour < 22) return 'vecera';
    return 'vecera'; // late night snack falls into dinner recipes
}

function getTimeOfDayLabels(period) {
    switch (period) {
        case 'ranajky': return { title: 'Ráno.', subtitle: 'Čas na raňajky.' };
        case 'desiata': return { title: 'Dopoludnie.', subtitle: 'Čas na desiatu.' };
        case 'obed': return { title: 'Poludnie.', subtitle: 'Čas na obed.' };
        case 'olovrant': return { title: 'Popoludnie.', subtitle: 'Čas na olovrant.' };
        case 'vecera': return { title: 'Večer.', subtitle: 'Čas na večeru.' };
        default: return { title: 'Večer.', subtitle: 'Čas na večeru.' };
    }
}

function generateSuggestions(selectedTags = [], customFilterText = '') {
    const period = getCurrentTimeOfDay();
    const diet = appState.profile.diet;
    
    const pool = RECIPE_DATABASE[period] || RECIPE_DATABASE['vecera'];
    const result = {
        lacnejsie: [],
        standard: [],
        drahsie: [],
        najcastejsie: []
    };
    
    // Function to score compatibility of a recipe
    const getRecipeScore = (recipe) => {
        let score = 0;
        
        // Tag matching
        if (selectedTags.length > 0) {
            selectedTags.forEach(tag => {
                if (recipe.tags.includes(tag)) score += 5;
            });
        }
        
        // Custom text search
        if (customFilterText) {
            const cleanText = customFilterText.toLowerCase();
            if (recipe.name.toLowerCase().includes(cleanText)) score += 10;
            if (recipe.description.toLowerCase().includes(cleanText)) score += 5;
            recipe.ingredients.forEach(ing => {
                if (ing.toLowerCase().includes(cleanText)) score += 3;
            });
        }
        
        // Diet filtering (strict exclusions)
        if (diet === 'vegetarian') {
            // Exclude non-vegetarian tags (meat, fish)
            if (recipe.tags.includes('mäso') || recipe.tags.includes('ryba')) {
                return -100; // block completely
            }
        } else if (diet === 'bezlaktozovy') {
            // Exclude milk/cheese tags
            if (recipe.tags.includes('syr') || recipe.ingredients.some(i => i.toLowerCase().includes('mliek') || i.toLowerCase().includes('jogurt') || i.toLowerCase().includes('maslo'))) {
                return -100;
            }
        } else if (diet === 'bezlepkovy') {
            // Exclude wheat / bread
            if (recipe.tags.includes('pečivo') || recipe.tags.includes('cestoviny') || recipe.ingredients.some(i => i.toLowerCase().includes('chlieb') || i.toLowerCase().includes('rožok') || i.toLowerCase().includes('múk') || i.toLowerCase().includes('pšen'))) {
                return -100;
            }
        }
        
        return score;
    };
    
    // Categorize
    ['lacnejsie', 'standard', 'drahsie'].forEach(tier => {
        let recipesForTier = pool[tier] || [];
        
        // If empty (e.g. pool lacks some specific tier, fallback to standard database dinner of same tier)
        if (recipesForTier.length === 0) {
            recipesForTier = RECIPE_DATABASE['vecera'][tier] || [];
        }
        
        // Score all
        const scored = recipesForTier.map(rec => ({
            recipe: rec,
            score: getRecipeScore(rec)
        })).filter(item => item.score >= -10); // filter out blocked diets
        
        // Sort by score
        scored.sort((a, b) => b.score - a.score);
        
        // Select top 3 or all available
        result[tier] = scored.slice(0, 3).map(item => item.recipe);
    });
    
    // Option 4: MOJE NAJČASTEJŠIE (My most frequent)
    // Filter frequent meals that match current time of day
    let matchingFrequent = appState.frequentMeals.filter(m => m.timeOfDay === period);
    
    // If we don't have enough logged frequent meals, grab general ones or standard suggestions
    if (matchingFrequent.length < 2) {
        matchingFrequent = [...matchingFrequent, ...appState.frequentMeals.filter(m => m.timeOfDay !== period)];
    }
    
    // Map frequent to visual recipe-like objects
    result.najcastejsie = matchingFrequent.map((freq, index) => {
        // Try to map to standard database to see if we can provide a preparation recipe!
        // We look for a name match
        let matchedRecipe = null;
        ['ranajky', 'desiata', 'obed', 'olovrant', 'vecera'].forEach(p => {
            ['lacnejsie', 'standard', 'drahsie'].forEach(t => {
                if (RECIPE_DATABASE[p] && RECIPE_DATABASE[p][t]) {
                    const found = RECIPE_DATABASE[p][t].find(r => r.name.toLowerCase().includes(freq.name.toLowerCase()) || freq.name.toLowerCase().includes(r.name.toLowerCase()));
                    if (found) matchedRecipe = found;
                }
            });
        });
        
        if (matchedRecipe) {
            // We have a recipe in our database! Use it but label it as "najčastejšie"
            return {
                ...matchedRecipe,
                isCustomLog: false,
                isFrequentSource: true
            };
        } else {
            // It's a purely custom entered meal without preset instructions. Create a dynamic card.
            return {
                id: `custom_freq_${index}`,
                name: freq.name,
                description: `Tvoje najčastejšie jedlo. Systém ti k nemu odporúča vyvážený príjem tekutín a striedanie s inými proteínovými alternatívami.`,
                price: 2.20,
                priceTier: 'standard',
                calories: freq.calories,
                protein: freq.protein,
                carbs: freq.carbs,
                fats: freq.fats,
                time: '5 min',
                difficulty: 'Rýchla príprava',
                ingredients: [
                    '1 porcia: ' + freq.name,
                    'Čerstvá voda na zapitie'
                ],
                steps: [
                    'Priprav si porciu jedla podľa svojich zvyklostí.',
                    'Dohliadni na dostatočný príjem bielkovín po jedle.',
                    'Zjedz a zaeviduj jedným kliknutím do dnešného denníka.'
                ],
                isCustomLog: true,
                isFrequentSource: true
            };
        }
    }).slice(0, 3);
    
    return result;
}


// --- 5. UI CONTROLLERS & EVENT HANDLERS ---

// DOM Cache Elements
const elDate = document.getElementById('current-date');
const elCalories = document.getElementById('current-calories');
const elTargetCalories = document.getElementById('target-calories');
const elProtein = document.getElementById('current-protein');
const elTargetProtein = document.getElementById('target-protein');
const elCarbs = document.getElementById('current-carbs');
const elTargetCarbs = document.getElementById('target-carbs');
const elFats = document.getElementById('current-fats');
const elTargetFats = document.getElementById('target-fats');

const barProtein = document.getElementById('bar-protein');
const barCarbs = document.getElementById('bar-carbs');
const barFats = document.getElementById('bar-fats');

const ringCalories = document.getElementById('ring-calories');

const loggedMealsContainer = document.getElementById('logged-meals-container');
const formQuickAdd = document.getElementById('form-quick-add');
const inputQuickAdd = document.getElementById('quick-add-input');
const btnClearDay = document.getElementById('btn-clear-day');

// Suggestion Page Elements
const elSugTitle = document.getElementById('suggestion-time-title');
const elSugSubtitle = document.getElementById('suggestion-time-subtitle');
const chipsContainer = document.getElementById('chips-container');
const inputCustomPref = document.getElementById('custom-pref-input');
const btnGenerateOffers = document.getElementById('btn-generate-offers');
const btnBackToFilters = document.getElementById('btn-back-to-filters');
const suggestionsListContainer = document.getElementById('suggestions-list-container');
const elResultsCountTitle = document.getElementById('results-count-title');
const tabButtons = document.querySelectorAll('.tabs-navigation .tab-btn');

// Profile Elements
const inputWeight = document.getElementById('profile-weight');
const inputTargetWeight = document.getElementById('profile-target-weight');
const selectGoal = document.getElementById('profile-goal');
const selectDiet = document.getElementById('profile-diet');
const btnSaveProfile = document.getElementById('btn-save-profile');

const infoCal = document.getElementById('info-calories');
const infoProt = document.getElementById('info-protein');
const infoCarbs = document.getElementById('info-carbs');
const infoFats = document.getElementById('info-fats');

// Modals
const modalRecipe = document.getElementById('recipe-modal');
const btnCloseRecipe = document.getElementById('btn-close-recipe');
const btnLogModalMeal = document.getElementById('btn-log-modal-meal');

const modalParser = document.getElementById('parser-modal');
const btnCloseParser = document.getElementById('btn-close-parser');
const btnLogParsedMeal = document.getElementById('btn-log-parsed-meal');
const btnCancelParsed = document.getElementById('btn-cancel-parsed');
const parserLoadingState = document.getElementById('parser-loading-state');
const parserSuccessState = document.getElementById('parser-success-state');

// Navigation Tabs Trigger
const navItems = document.querySelectorAll('.bottom-nav .nav-item');
const screens = document.querySelectorAll('.screen-content .app-screen');

// Global current selection placeholder
let activeSuggestions = null;
let currentSelectedTier = 'lacnejsie';
let activeSelectedRecipe = null;
let activeParsedMeal = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initAppState();
    updateDateDisplay();
    updateDashboardUI();
    populateProfileUI();
    setupNavigation();
    setupChips();
    setupSuggestionsFlow();
    setupModalEvents();
    setupParserFlow();
    setupFrequentMealsForm();
});

// Update human readable date
function updateDateDisplay() {
    const days = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];
    const months = ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'];
    
    const d = new Date();
    const dayName = days[d.getDay()];
    const dateNum = d.getDate();
    const monthName = months[d.getMonth()];
    
    if (elDate) {
        elDate.textContent = `${dayName}, ${dateNum}. ${monthName}`;
    }
}

// Bottom Nav bar routers
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetScreenId = item.getAttribute('data-screen');
            
            // Switch tabs active classes
            navItems.forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');
            
            // Switch screens
            screens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === targetScreenId) {
                    screen.classList.add('active');
                }
            });
            
            // If screen is get suggestions, adjust time title dynamically
            if (targetScreenId === 'screen-get-suggestions') {
                const period = getCurrentTimeOfDay();
                const labels = getTimeOfDayLabels(period);
                elSugTitle.textContent = labels.title;
                elSugSubtitle.textContent = labels.subtitle;
            }
        });
    });
    
    // Quick buttons that redirect
    const btnToProfile = document.getElementById('btn-to-profile');
    if (btnToProfile) {
        btnToProfile.addEventListener('click', () => {
            // Trigger profile tab
            const profileNavItem = document.querySelector('.bottom-nav .nav-item[data-screen="screen-profile"]');
            if (profileNavItem) profileNavItem.click();
        });
    }
    
    const btnGoSuggest = document.getElementById('btn-go-suggest');
    if (btnGoSuggest) {
        btnGoSuggest.addEventListener('click', () => {
            const sugNavItem = document.querySelector('.bottom-nav .nav-item[data-screen="screen-get-suggestions"]');
            if (sugNavItem) sugNavItem.click();
        });
    }
}

// Handles selecting na co mas chut tags
function setupChips() {
    chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        
        chip.classList.toggle('selected');
    });
}

// Logic for showing suggestions results
function setupSuggestionsFlow() {
    btnGenerateOffers.addEventListener('click', () => {
        // Collect selected tags
        const selectedChips = Array.from(chipsContainer.querySelectorAll('.chip.selected'))
            .map(chip => chip.getAttribute('data-tag'));
        const customText = inputCustomPref.value;
        
        // Generate new offers based on state
        activeSuggestions = generateSuggestions(selectedChips, customText);
        currentSelectedTier = 'lacnejsie';
        
        // Sync active state on tabs
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tier') === currentSelectedTier) {
                btn.classList.add('active');
            }
        });
        
        // Render
        renderSuggestions();
        
        // Move to results screen
        screens.forEach(s => s.classList.remove('active'));
        document.getElementById('screen-suggestions-results').classList.add('active');
    });
    
    btnBackToFilters.addEventListener('click', () => {
        // Go back to selection screen
        screens.forEach(s => s.classList.remove('active'));
        document.getElementById('screen-get-suggestions').classList.add('active');
    });
    
    // Handle tab clicking inside results screen
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentSelectedTier = btn.getAttribute('data-tier');
            renderSuggestions();
        });
    });
}

function renderSuggestions() {
    if (!activeSuggestions) return;
    
    const period = getCurrentTimeOfDay();
    const periodLabel = period === 'ranajky' ? 'RAŇAJKY' : period === 'desiata' ? 'DESIATA' : period === 'obed' ? 'OBED' : period === 'olovrant' ? 'OLOVRANT' : 'VEČERA';
    
    const list = activeSuggestions[currentSelectedTier] || [];
    elResultsCountTitle.textContent = `${periodLabel} — ${list.length} NÁVRHY`;
    
    suggestionsListContainer.innerHTML = '';
    
    if (list.length === 0) {
        suggestionsListContainer.innerHTML = `
            <div class="empty-meals-state" style="margin-top: 20px;">
                <p>Nenašli sme žiadne recepty vyhovujúce tvojmu diétnemu filtru.</p>
                <button class="outline-gold-btn" id="btn-reset-filters-diet">Resetovať filtre chuti</button>
            </div>
        `;
        document.getElementById('btn-reset-filters-diet').addEventListener('click', () => {
            // clear selected chips
            chipsContainer.querySelectorAll('.chip.selected').forEach(c => c.classList.remove('selected'));
            inputCustomPref.value = '';
            btnGenerateOffers.click();
        });
        return;
    }
    
    list.forEach((recipe, index) => {
        const item = document.createElement('div');
        item.className = 'suggestion-card';
        
        // Format ingredients summary (max 6)
        const ingredientsText = recipe.ingredients
            .map(i => i.split(/\s[a-zA-Z]/)[0].replace(/[0-9g\-\s]/g, '').trim()) // clean numbers/quantities
            .filter(i => i.length > 2)
            .slice(0, 6)
            .join(', ');
            
        item.innerHTML = `
            <div class="sug-num">${index + 1}</div>
            <div class="sug-details">
                <div class="sug-top-row">
                    <h3 class="sug-title">${recipe.name}</h3>
                    <div class="sug-meta-col">
                        <span class="sug-kcal">${recipe.calories} kcal</span>
                        <div class="sug-price">~${recipe.price.toFixed(2)}€</div>
                    </div>
                </div>
                <p class="sug-desc">${recipe.description}</p>
                <p class="sug-ingredients-italic">${ingredientsText}</p>
                <div class="sug-action-row">
                    <button class="sug-recipe-btn" data-id="${recipe.id}">ZOBRAZIŤ RECEPT →</button>
                </div>
            </div>
        `;
        
        suggestionsListContainer.appendChild(item);
    });
    
    // Add Event listener to show recipe buttons
    suggestionsListContainer.querySelectorAll('.sug-recipe-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const recId = btn.getAttribute('data-id');
            const foundRecipe = list.find(r => r.id === recId);
            if (foundRecipe) {
                openRecipeModal(foundRecipe);
            }
        });
    });
}

// Recipe Modal Controller
function openRecipeModal(recipe) {
    activeSelectedRecipe = recipe;
    
    document.getElementById('recipe-modal-title').textContent = recipe.name;
    document.getElementById('recipe-modal-time').textContent = recipe.time;
    document.getElementById('recipe-modal-difficulty').textContent = recipe.difficulty;
    document.getElementById('recipe-modal-price').textContent = `~${recipe.price.toFixed(2)} €`;
    
    document.getElementById('recipe-modal-cal').textContent = recipe.calories;
    document.getElementById('recipe-modal-prot').textContent = `${recipe.protein}g`;
    document.getElementById('recipe-modal-carbs').textContent = `${recipe.carbs}g`;
    document.getElementById('recipe-modal-fats').textContent = `${recipe.fats}g`;
    
    // Ingredients
    const elIngList = document.getElementById('recipe-modal-ingredients');
    elIngList.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        elIngList.appendChild(li);
    });
    
    // Steps
    const elStepsList = document.getElementById('recipe-modal-steps');
    elStepsList.innerHTML = '';
    recipe.steps.forEach((step, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="step-num">${idx + 1}</span>
            <span class="step-text">${step}</span>
        `;
        elStepsList.appendChild(li);
    });
    
    modalRecipe.classList.add('active');
}

function setupModalEvents() {
    btnCloseRecipe.addEventListener('click', () => {
        modalRecipe.classList.remove('active');
    });
    
    btnLogModalMeal.addEventListener('click', () => {
        if (!activeSelectedRecipe) return;
        
        logMealToDiary({
            name: activeSelectedRecipe.name,
            calories: activeSelectedRecipe.calories,
            protein: activeSelectedRecipe.protein,
            carbs: activeSelectedRecipe.carbs,
            fats: activeSelectedRecipe.fats,
            price: activeSelectedRecipe.price
        });
        
        modalRecipe.classList.remove('active');
        
        // Navigate to dashboard automatically
        const dashboardTab = document.querySelector('.bottom-nav .nav-item[data-screen="screen-dashboard"]');
        if (dashboardTab) dashboardTab.click();
    });
}

// Log a meal into today's log and save state
function logMealToDiary(meal) {
    const newLogItem = {
        id: 'log_' + Date.now(),
        name: meal.name,
        calories: Math.round(meal.calories),
        protein: Math.round(meal.protein),
        carbs: Math.round(meal.carbs),
        fats: Math.round(meal.fats),
        price: meal.price || 1.80,
        timestamp: new Date().toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })
    };
    
    appState.todayLog.unshift(newLogItem);
    
    // Save to frequent meals array
    const period = getCurrentTimeOfDay();
    const existingFrequent = appState.frequentMeals.find(m => m.name.toLowerCase() === meal.name.toLowerCase());
    if (existingFrequent) {
        existingFrequent.count += 1;
    } else {
        appState.frequentMeals.push({
            name: meal.name,
            calories: meal.calories,
            protein: meal.protein,
            carbs: meal.carbs,
            fats: meal.fats,
            timeOfDay: period,
            count: 1
        });
    }
    
    saveState();
    updateDashboardUI();
    
    // Visual subtle feedback toast
    showToastNotification(`Mňam! Jedlo bolo úspešne pridané do tvojho denníka.`);
}

function showToastNotification(text) {
    const toast = document.createElement('div');
    toast.className = 'pwa-prompt';
    toast.style.bottom = '90px';
    toast.style.left = '20px';
    toast.style.right = '20px';
    toast.innerHTML = `
        <div class="pwa-text">
            <div class="pwa-title">MealMate Asistent</div>
            <div class="pwa-desc">${text}</div>
        </div>
        <button class="pwa-btn-add" style="background:#4cd964; color:#fff;">Super</button>
    `;
    
    document.body.appendChild(toast);
    
    const dismiss = () => {
        toast.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    };
    
    toast.querySelector('.pwa-btn-add').addEventListener('click', dismiss);
    setTimeout(dismiss, 3500);
}

// Sync screen with state
function updateDashboardUI() {
    // Current totals
    let curCal = 0, curP = 0, curC = 0, curF = 0;
    appState.todayLog.forEach(m => {
        curCal += m.calories;
        curP += m.protein;
        curC += m.carbs;
        curF += m.fats;
    });
    
    // Limits
    const limCal = appState.profile.targets.calories;
    const limP = appState.profile.targets.protein;
    const limC = appState.profile.targets.carbs;
    const limF = appState.profile.targets.fats;
    
    // Set text values
    elCalories.textContent = curCal;
    elTargetCalories.textContent = limCal;
    elProtein.textContent = curP;
    elTargetProtein.textContent = limP;
    elCarbs.textContent = curC;
    elTargetCarbs.textContent = limC;
    elFats.textContent = curF;
    elTargetFats.textContent = limF;
    
    // Set bar percentages
    const pPercent = Math.min(100, Math.round((curP / limP) * 100)) + '%';
    const cPercent = Math.min(100, Math.round((curC / limC) * 100)) + '%';
    const fPercent = Math.min(100, Math.round((curF / limF) * 100)) + '%';
    
    barProtein.style.width = pPercent;
    barCarbs.style.width = cPercent;
    barFats.style.width = fPercent;
    
    // Set circular ring stroke offset
    // Radius = 54, Circumference = 2 * PI * r = 339.29
    const calRatio = Math.min(1.0, curCal / limCal);
    const strokeOffset = 339.29 - (calRatio * 339.29);
    ringCalories.setAttribute('stroke-dashoffset', strokeOffset);
    
    // Render logged meals list
    loggedMealsContainer.innerHTML = '';
    
    if (appState.todayLog.length === 0) {
        loggedMealsContainer.innerHTML = `
            <div class="empty-meals-state">
                <p>Dnes si ešte nezaznamenal žiadne jedlo.</p>
                <button class="outline-gold-btn" id="btn-go-suggest-inner">Navrhnúť jedlo</button>
            </div>
        `;
        document.getElementById('btn-go-suggest-inner').addEventListener('click', () => {
            document.querySelector('.bottom-nav .nav-item[data-screen="screen-get-suggestions"]').click();
        });
        return;
    }
    
    appState.todayLog.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'meal-log-item';
        div.innerHTML = `
            <div class="meal-log-details">
                <h4 class="meal-log-title">${meal.name}</h4>
                <div class="meal-log-meta">
                    <span>${meal.timestamp}</span>
                    <div class="meal-log-macros">
                        <span class="p-dot">B: ${meal.protein}g</span>
                        <span class="c-dot">S: ${meal.carbs}g</span>
                        <span class="f-dot">T: ${meal.fats}g</span>
                    </div>
                </div>
            </div>
            <div class="meal-log-right">
                <span class="meal-log-kcal">${meal.calories} kcal</span>
                <button class="delete-meal-btn" data-id="${meal.id}" aria-label="Vymazať jedlo">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        `;
        
        div.querySelector('.delete-meal-btn').addEventListener('click', () => {
            deleteMeal(meal.id);
        });
        
        loggedMealsContainer.appendChild(div);
    });
}

function deleteMeal(id) {
    appState.todayLog = appState.todayLog.filter(m => m.id !== id);
    saveState();
    updateDashboardUI();
}

// Reset daily log
if (btnClearDay) {
    btnClearDay.addEventListener('click', () => {
        if (confirm('Naozaj si praješ vymazať celú históriu jedál pre dnešný deň?')) {
            appState.todayLog = [];
            saveState();
            updateDashboardUI();
        }
    });
}


// --- 6. SMART PARSER WORKFLOW ---
function setupParserFlow() {
    formQuickAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawText = inputQuickAdd.value.trim();
        if (!rawText) return;
        
        // Open parser modal and show searching spinner state
        modalParser.classList.add('active');
        parserLoadingState.classList.remove('hidden');
        parserSuccessState.classList.add('hidden');
        
        // Simulate a 1.4-second smart web lookup
        setTimeout(() => {
            const result = smartParseSlovakMeal(rawText);
            activeParsedMeal = result;
            
            // Populating visual success state
            document.getElementById('parser-meal-title').textContent = result.name;
            document.getElementById('parser-cal').textContent = result.calories;
            document.getElementById('parser-prot').textContent = `${result.protein}g`;
            document.getElementById('parser-carbs').textContent = `${result.carbs}g`;
            document.getElementById('parser-fats').textContent = `${result.fats}g`;
            
            // Populate ingredient preview chips
            const elChips = document.getElementById('parser-ingredients-chips');
            elChips.innerHTML = '';
            result.ingredients.forEach(ing => {
                const chip = document.createElement('span');
                chip.className = 'ing-chip';
                chip.textContent = ing;
                elChips.appendChild(chip);
            });
            
            // Hide spinner and show results
            parserLoadingState.classList.add('hidden');
            parserSuccessState.classList.remove('hidden');
            
            // Clear input box
            inputQuickAdd.value = '';
        }, 1400);
    });
    
    // Modal buttons
    btnCloseParser.addEventListener('click', () => {
        modalParser.classList.remove('active');
    });
    
    btnCancelParsed.addEventListener('click', () => {
        modalParser.classList.remove('active');
        // Place text back to edit it
        if (activeParsedMeal) {
            inputQuickAdd.value = activeParsedMeal.name;
            inputQuickAdd.focus();
        }
    });
    
    btnLogParsedMeal.addEventListener('click', () => {
        if (!activeParsedMeal) return;
        
        logMealToDiary({
            name: activeParsedMeal.name,
            calories: activeParsedMeal.calories,
            protein: activeParsedMeal.protein,
            carbs: activeParsedMeal.carbs,
            fats: activeParsedMeal.fats,
            price: 2.20
        });
        
        modalParser.classList.remove('active');
    });
}


// --- 7. PROFILE & TARGET LIMITS CONTROL ---
function populateProfileUI() {
    inputWeight.value = appState.profile.weight;
    inputTargetWeight.value = appState.profile.targetWeight;
    selectGoal.value = appState.profile.goal;
    selectDiet.value = appState.profile.diet;

    // Output display cards
    infoCal.textContent = appState.profile.targets.calories;
    infoProt.textContent = `${appState.profile.targets.protein}g`;
    infoCarbs.textContent = `${appState.profile.targets.carbs}g`;
    infoFats.textContent = `${appState.profile.targets.fats}g`;

    renderFrequentMealsList();
}

function renderFrequentMealsList() {
    const list = document.getElementById('frequent-meals-list');
    if (!list) return;
    list.innerHTML = '';

    if (!appState.frequentMeals || appState.frequentMeals.length === 0) {
        list.innerHTML = '<p class="settings-card-desc" style="margin:8px 0;">Zatiaľ nemáš žiadne uložené jedlá.</p>';
        return;
    }

    const labels = { ranajky:'Raňajky', desiata:'Desiata', obed:'Obed', olovrant:'Olovrant', vecera:'Večera' };
    const sorted = [...appState.frequentMeals].sort((a,b) => (b.count||0) - (a.count||0));

    sorted.forEach((m, idx) => {
        const row = document.createElement('div');
        row.className = 'frequent-meal-row';
        row.innerHTML = `
            <div class="frequent-meal-info">
                <span class="frequent-meal-name">${m.name}</span>
                <span class="frequent-meal-meta">${labels[m.timeOfDay] || '—'} • ${m.calories} kcal • B:${m.protein}g S:${m.carbs}g T:${m.fats}g${m.count ? ' • ×'+m.count : ''}</span>
            </div>
            <button class="delete-meal-btn" data-idx="${idx}" aria-label="Vymazať">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        `;
        const realName = sorted[idx].name;
        row.querySelector('.delete-meal-btn').addEventListener('click', () => {
            appState.frequentMeals = appState.frequentMeals.filter(x => x.name !== realName);
            saveState();
            renderFrequentMealsList();
        });
        list.appendChild(row);
    });
}

function setupFrequentMealsForm() {
    const form = document.getElementById('form-add-frequent');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('freq-name').value.trim();
        if (!name) return;
        const meal = {
            name,
            timeOfDay: document.getElementById('freq-time').value,
            calories: parseInt(document.getElementById('freq-cal').value) || 0,
            protein: parseInt(document.getElementById('freq-p').value) || 0,
            carbs: parseInt(document.getElementById('freq-c').value) || 0,
            fats: parseInt(document.getElementById('freq-f').value) || 0,
            count: 1
        };
        const existing = appState.frequentMeals.find(m => m.name.toLowerCase() === name.toLowerCase());
        if (existing) {
            Object.assign(existing, meal, { count: (existing.count || 1) + 1 });
        } else {
            appState.frequentMeals.push(meal);
        }
        saveState();
        renderFrequentMealsList();
        form.reset();
        document.getElementById('freq-cal').value = 400;
        document.getElementById('freq-p').value = 25;
        document.getElementById('freq-c').value = 40;
        document.getElementById('freq-f').value = 15;
        showToastNotification('Jedlo pridané medzi najčastejšie.');
    });
}

if (btnSaveProfile) {
    btnSaveProfile.addEventListener('click', () => {
        const w = parseFloat(inputWeight.value);
        const tw = parseFloat(inputTargetWeight.value);
        
        if (w > 0 && tw > 0) {
            appState.profile.weight = w;
            appState.profile.targetWeight = tw;
            appState.profile.goal = selectGoal.value;
            appState.profile.diet = selectDiet.value;
            
            recalculateLimits(true);
            populateProfileUI();
            updateDashboardUI();
            
            showToastNotification('Tvoj profil a nutričné limity boli úspešne aktualizované!');
        } else {
            alert('Prosím, zadaj platné hodnoty hmotnosti!');
        }
    });
}

// --- 8. SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((reg) => console.log('MealMate Service Worker zaregistrovaný úspešne!', reg.scope))
            .catch((err) => console.log('Registrácia Service Workera zlyhala:', err));
    });
}

