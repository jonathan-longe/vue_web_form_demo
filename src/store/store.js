import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from "@/store/getters";
import {actions} from "@/store/actions"
import {mutations} from "@/store/mutations";
import {version} from "../../package.json";
import {plugins} from "@/store/plugins";

Vue.use(Vuex)


export const rsiStore = new Vuex.Store ({
  state: {
    agencies: [
      {
        "id": "1002",
        "agency": "LOWER MAINLAND DISTRICT RCMP"
      },
      {
        "id": "1003",
        "agency": "BCHP - BURNABY"
      },
      {
        "id": "1004",
        "agency": "BCHP - DEAS ISLAND"
      },
      {
        "id": "1005",
        "agency": "BC INTEGRATED GANG TASK FORCE"
      },
      {
        "id": "1101",
        "agency": "NORTH VANCOUVER RCMP"
      },
      {
        "id": "1103",
        "agency": "BOWEN ISLAND RCMP"
      },
      {
        "id": "1104",
        "agency": "SQUAMISH RCMP"
      },
      {
        "id": "1105",
        "agency": "WHISTLER/PEMBERTON RCMP"
      },
      {
        "id": "1106",
        "agency": "SUNSHINE COAST RCMP"
      },
      {
        "id": "1107",
        "agency": "STL' ATL' IMX POLICE FNAPS"
      },
      {
        "id": "1202",
        "agency": "BURNABY RCMP"
      },
      {
        "id": "1203",
        "agency": "COQUITLAM RCMP"
      },
      {
        "id": "1206",
        "agency": "RIDGE MEADOWS RCMP"
      },
      {
        "id": "1207",
        "agency": "IRSU - GREATER VANCOUVER"
      },
      {
        "id": "1301",
        "agency": "SURREY RCMP"
      },
      {
        "id": "1303",
        "agency": "LANGLEY RCMP"
      },
      {
        "id": "1304",
        "agency": "WHITE ROCK RCMP"
      },
      {
        "id": "1305",
        "agency": "BCHP - FRASER COAST IRSU"
      },
      {
        "id": "1401",
        "agency": "RICHMOND RCMP"
      },
      {
        "id": "1402",
        "agency": "UNIVERSITY RCMP"
      },
      {
        "id": "1501",
        "agency": "UPPER FRASER VALLEY REG RCMP"
      },
      {
        "id": "1503",
        "agency": "MISSION RCMP"
      },
      {
        "id": "1510",
        "agency": "RCMP EHQ OCC"
      },
      {
        "id": "2100",
        "agency": "SOUTHEAST DISTRICT RCMP"
      },
      {
        "id": "2101",
        "agency": "KELOWNA RCMP"
      },
      {
        "id": "2102",
        "agency": "PENTICTON RCMP"
      },
      {
        "id": "2103",
        "agency": "SUMMERLAND RCMP"
      },
      {
        "id": "2104",
        "agency": "SOUTH OKANAGAN RCMP"
      },
      {
        "id": "2105",
        "agency": "KEREMEOS RCMP"
      },
      {
        "id": "2106",
        "agency": "PRINCETON RCMP"
      },
      {
        "id": "2109",
        "agency": "NORTH OKANAGAN RURAL"
      },
      {
        "id": "2110",
        "agency": "KELOWNA OCC"
      },
      {
        "id": "2111",
        "agency": "NORTH OKANAGAN RCMP"
      },
      {
        "id": "2112",
        "agency": "SALMON ARM RCMP"
      },
      {
        "id": "2113",
        "agency": "SICAMOUS RCMP"
      },
      {
        "id": "2114",
        "agency": "REVELSTOKE RCMP"
      },
      {
        "id": "2201",
        "agency": "KAMLOOPS CITY RCMP"
      },
      {
        "id": "2203",
        "agency": "CHASE RCMP"
      },
      {
        "id": "2204",
        "agency": "BARRIERE RCMP"
      },
      {
        "id": "2205",
        "agency": "CLEARWATER RCMP"
      },
      {
        "id": "2206",
        "agency": "LOGAN LAKE RCMP"
      },
      {
        "id": "2207",
        "agency": "MERRITT RCMP"
      },
      {
        "id": "2208",
        "agency": "ASHCROFT RCMP"
      },
      {
        "id": "2209",
        "agency": "LILLOOET RCMP"
      },
      {
        "id": "2210",
        "agency": "LYTTON RCMP"
      },
      {
        "id": "2211",
        "agency": "CLINTON RCMP"
      },
      {
        "id": "2212",
        "agency": "STL' ATL' IMX POLICE FNAPS"
      },
      {
        "id": "2301",
        "agency": "CENTRAL KOOTENAY RCMP"
      },
      {
        "id": "2303",
        "agency": "CASTLEGAR RCMP"
      },
      {
        "id": "2304",
        "agency": "TRAIL AND GREATER DIST RCMP"
      },
      {
        "id": "2305",
        "agency": "BOUNDARY RCMP"
      },
      {
        "id": "2401",
        "agency": "CRANBROOK/KIMBERLEY RCMP"
      },
      {
        "id": "2403",
        "agency": "ELK VALLEY RCMP"
      },
      {
        "id": "2404",
        "agency": "CRESTON RCMP"
      },
      {
        "id": "2405",
        "agency": "COLUMBIA VALLEY RCMP"
      },
      {
        "id": "2406",
        "agency": "GOLDEN RCMP"
      },
      {
        "id": "3100",
        "agency": "NORTH DISTRICT RCMP"
      },
      {
        "id": "3101",
        "agency": "PRINCE GEORGE RCMP"
      },
      {
        "id": "3102",
        "agency": "MCBRIDE RCMP"
      },
      {
        "id": "3103",
        "agency": "VALEMOUNT RCMP"
      },
      {
        "id": "3104",
        "agency": "MACKENZIE RCMP"
      },
      {
        "id": "3105",
        "agency": "TSAY KEH DENE RCMP"
      },
      {
        "id": "3111",
        "agency": "NORTH DISTRICT OCC"
      },
      {
        "id": "3201",
        "agency": "VANDERHOOF RCMP"
      },
      {
        "id": "3202",
        "agency": "FORT ST. JAMES RCMP"
      },
      {
        "id": "3203",
        "agency": "TAKLA LANDING RCMP"
      },
      {
        "id": "3204",
        "agency": "FRASER LAKE RCMP"
      },
      {
        "id": "3205",
        "agency": "BURNS LAKE RCMP"
      },
      {
        "id": "3301",
        "agency": "QUESNEL RCMP"
      },
      {
        "id": "3303",
        "agency": "100 MILE HOUSE RCMP"
      },
      {
        "id": "3304",
        "agency": "WILLIAMS LAKE RCMP"
      },
      {
        "id": "3305",
        "agency": "ALEXIS CREEK RCMP"
      },
      {
        "id": "3306",
        "agency": "ANAHIM LAKE RCMP"
      },
      {
        "id": "3307",
        "agency": "BELLA COOLA RCMP"
      },
      {
        "id": "3308",
        "agency": "BELLA BELLA RCMP"
      },
      {
        "id": "3401",
        "agency": "FORT ST. JOHN RCMP"
      },
      {
        "id": "3402",
        "agency": "NORTHERN ROCKIES RCMP"
      },
      {
        "id": "3403",
        "agency": "DAWSON CREEK RCMP"
      },
      {
        "id": "3404",
        "agency": "TUMBLER RIDGE RCMP"
      },
      {
        "id": "3405",
        "agency": "CHETWYND RCMP"
      },
      {
        "id": "3406",
        "agency": "HUDSON'S HOPE RCMP"
      },
      {
        "id": "3501",
        "agency": "TERRACE RCMP"
      },
      {
        "id": "3502",
        "agency": "KITIMAT RCMP"
      },
      {
        "id": "3503",
        "agency": "HOUSTON RCMP"
      },
      {
        "id": "3505",
        "agency": "SMITHERS RCMP"
      },
      {
        "id": "3506",
        "agency": "NEW HAZELTON RCMP"
      },
      {
        "id": "3601",
        "agency": "PRINCE RUPERT RCMP"
      },
      {
        "id": "3602",
        "agency": "LISIMS/NASS VALLEY RCMP"
      },
      {
        "id": "3603",
        "agency": "STEWART RCMP"
      },
      {
        "id": "3604",
        "agency": "DEASE LAKE RCMP"
      },
      {
        "id": "3606",
        "agency": "MASSET RCMP"
      },
      {
        "id": "3607",
        "agency": "QUEEN CHARLOTTE RCMP"
      },
      {
        "id": "3608",
        "agency": "ATLIN RCMP"
      },
      {
        "id": "3609",
        "agency": "DO NOT USE (EX NM VJUR)"
      },
      {
        "id": "4100",
        "agency": "ISLAND DISTRICT RCMP"
      },
      {
        "id": "4105",
        "agency": "WEST SHORE RCMP"
      },
      {
        "id": "4106",
        "agency": "SIDNEY/NORTH SAANICH RCMP"
      },
      {
        "id": "4107",
        "agency": "SOOKE RCMP"
      },
      {
        "id": "4108",
        "agency": "SALT SPRING ISLAND RCMP"
      },
      {
        "id": "4109",
        "agency": "OUTER GULF ISLANDS RCMP"
      },
      {
        "id": "4110",
        "agency": "BCHP - CRD IRSU"
      },
      {
        "id": "4111",
        "agency": "DO NOT USE (EX VO VJUR)"
      },
      {
        "id": "4201",
        "agency": "NANAIMO RCMP"
      },
      {
        "id": "4202",
        "agency": "GABRIOLA ISLAND RCMP"
      },
      {
        "id": "4203",
        "agency": "LADYSMITH RCMP"
      },
      {
        "id": "4204",
        "agency": "NORTH COWICHAN/DUNCAN RCMP"
      },
      {
        "id": "4205",
        "agency": "SHAWNIGAN LAKE RCMP"
      },
      {
        "id": "4206",
        "agency": "BCHP - CHEMAINUS"
      },
      {
        "id": "4207",
        "agency": "WEST COAST MARINE RCMP"
      },
      {
        "id": "4208",
        "agency": "LAKE COWICHAN RCMP"
      },
      {
        "id": "4211",
        "agency": "DO NOT USE (EX NN VJUR)"
      },
      {
        "id": "4301",
        "agency": "COMOX VALLEY RCMP"
      },
      {
        "id": "4302",
        "agency": "OCEANSIDE RCMP"
      },
      {
        "id": "4303",
        "agency": "PORT ALBERNI RCMP"
      },
      {
        "id": "4304",
        "agency": "TOFINO RCMP (AHOUSAHT)"
      },
      {
        "id": "4305",
        "agency": "UCLUELET RCMP"
      },
      {
        "id": "4306",
        "agency": "POWELL RIVER RCMP"
      },
      {
        "id": "4307",
        "agency": "BCHP - PARKSVILLE"
      },
      {
        "id": "4308",
        "agency": "BCHP - ISLAND IRSU"
      },
      {
        "id": "4311",
        "agency": "NORTH ISLAND OCC"
      },
      {
        "id": "4315",
        "agency": "CAMPBELL RIVER RCMP"
      },
      {
        "id": "4316",
        "agency": "QUADRA ISLAND RCMP"
      },
      {
        "id": "4317",
        "agency": "NOOTKA SOUND RCMP"
      },
      {
        "id": "4318",
        "agency": "SAYWARD RCMP"
      },
      {
        "id": "4319",
        "agency": "PORT HARDY RCMP"
      },
      {
        "id": "4320",
        "agency": "PORT MCNEILL RCMP"
      },
      {
        "id": "4321",
        "agency": "PORT ALICE RCMP"
      },
      {
        "id": "4322",
        "agency": "ALERT BAY RCMP"
      },
      {
        "id": "4323",
        "agency": "BCHP - CAMPBELL RIVER"
      },
      {
        "id": "5000",
        "agency": "E DIV (LMD) RCMP"
      },
      {
        "id": "5001",
        "agency": "E DIV (VIR) RCMP"
      },
      {
        "id": "5002",
        "agency": "DO NOT USE (EX ED VJUR)"
      },
      {
        "id": "6000",
        "agency": "CFSEU - LMD 6000"
      },
      {
        "id": "6001",
        "agency": "CFSEU ISLAND"
      },
      {
        "id": "6002",
        "agency": "CFSEU NSE"
      },
      {
        "id": "9000",
        "agency": "LMD RCMP CTU"
      },
      {
        "id": "9001",
        "agency": "VIR RCMP CTU"
      },
      {
        "id": "9002",
        "agency": "NSE RCMP CTU"
      },
      {
        "id": "AB",
        "agency": "ABBOTSFORD POLICE DEPARTMENT"
      },
      {
        "id": "CS",
        "agency": "CENTRAL SAANICH POLICE SERVICE"
      },
      {
        "id": "DE",
        "agency": "DELTA POLICE DEPARTMENT"
      },
      {
        "id": "E",
        "agency": "ECOMM OCC"
      },
      {
        "id": "GV",
        "agency": "SCBCTAPS - TRANSIT POLICE"
      },
      {
        "id": "II",
        "agency": "INDEPENDENT INVESTIGATIONS"
      },
      {
        "id": "NP",
        "agency": "NELSON POLICE DEPARTMENT"
      },
      {
        "id": "NW",
        "agency": "NEW WESTMINSTER POLICE DEPT"
      },
      {
        "id": "OB",
        "agency": "OAK BAY POLICE DEPARTMENT"
      },
      {
        "id": "PO",
        "agency": "PORT MOODY POLICE DEPARTMENT"
      },
      {
        "id": "RC",
        "agency": "DO NOT USE (EX CRD RCU)"
      },
      {
        "id": "SA",
        "agency": "SAANICH POLICE DEPARTMENT"
      },
      {
        "id": "VA",
        "agency": "VANCOUVER POLICE DEPARTMENT"
      },
      {
        "id": "VI",
        "agency": "VICTORIA POLICE DEPARTMENT"
      },
      {
        "id": "WV",
        "agency": "WEST VANCOUVER POLICE DEPT."
      },
      {
        "id": "XL",
        "agency": "LMD X-SERVER ACCESS"
      },
      {
        "id": "XN",
        "agency": "NSE X-SERVER ACCESS"
      },
      {
        "id": "XV",
        "agency": "VIR X-SERVER ACCESS"
      },
      {
        "id": "ZZ",
        "agency": "PRIMECORP"
      }
    ],
    db_ready: false,
    cities: [
      {
        "objectCd": "OHMH",
        "objectDsc": "100 MILE HOUSE"
      },
      {
        "objectCd": "OHTM",
        "objectDsc": "103 MILE HOUSE"
      },
      {
        "objectCd": "OHFM",
        "objectDsc": "105 MILE HOUSE"
      },
      {
        "objectCd": "OHEM",
        "objectDsc": "108 MILE HOUSE"
      },
      {
        "objectCd": "OHER",
        "objectDsc": "108 MILE RANCH"
      },
      {
        "objectCd": "OFOM",
        "objectDsc": "141 MILE HOUSE"
      },
      {
        "objectCd": "OFMH",
        "objectDsc": "150 MILE HOUSE"
      },
      {
        "objectCd": "SMHS",
        "objectDsc": "70 MILE HOUSE"
      },
      {
        "objectCd": "NTMH",
        "objectDsc": "93 MILE HOUSE"
      },
      {
        "objectCd": "ABB",
        "objectDsc": "ABBOTSFORD"
      },
      {
        "objectCd": "ADLK",
        "objectDsc": "ADAMS LAKE"
      },
      {
        "objectCd": "AGSZ",
        "objectDsc": "AGASSIZ"
      },
      {
        "objectCd": "AGAT",
        "objectDsc": "AGATE"
      },
      {
        "objectCd": "AHST",
        "objectDsc": "AHOUSAHT"
      },
      {
        "objectCd": "ANWO",
        "objectDsc": "AINSWORTH HOT SPRINGS"
      },
      {
        "objectCd": "ALBR",
        "objectDsc": "ALBREDA"
      },
      {
        "objectCd": "ALBA",
        "objectDsc": "ALERT BAY"
      },
      {
        "objectCd": "ALEX",
        "objectDsc": "ALEXANDRIA"
      },
      {
        "objectCd": "ALCK",
        "objectDsc": "ALEXIS CREEK"
      },
      {
        "objectCd": "ALLK",
        "objectDsc": "ALEZA LAKE"
      },
      {
        "objectCd": "ALAR",
        "objectDsc": "ALICE ARM"
      },
      {
        "objectCd": "AKLK",
        "objectDsc": "ALKALI LAKE"
      },
      {
        "objectCd": "ASLK",
        "objectDsc": "ALLISON LAKE"
      },
      {
        "objectCd": "ALTN",
        "objectDsc": "ALTONA"
      },
      {
        "objectCd": "ANCD",
        "objectDsc": "ANACONDA"
      },
      {
        "objectCd": "ANLK",
        "objectDsc": "ANAHIM LAKE"
      },
      {
        "objectCd": "AFIR",
        "objectDsc": "ANAHIMS FLAT IR"
      },
      {
        "objectCd": "AMIR",
        "objectDsc": "ANAHIMS MEADOW IR"
      },
      {
        "objectCd": "ANMT",
        "objectDsc": "ANGLEMONT"
      },
      {
        "objectCd": "ANM",
        "objectDsc": "ANMORE"
      },
      {
        "objectCd": "AARM",
        "objectDsc": "ANSTEY ARM"
      },
      {
        "objectCd": "ANIS",
        "objectDsc": "ANVIL ISLAND"
      },
      {
        "objectCd": "ANYX",
        "objectDsc": "ANYOX"
      },
      {
        "objectCd": "APEX",
        "objectDsc": "APEX"
      },
      {
        "objectCd": "APDL",
        "objectDsc": "APPLEDALE"
      },
      {
        "objectCd": "ARGT",
        "objectDsc": "ARGENTA"
      },
      {
        "objectCd": "AZIS",
        "objectDsc": "ARISTAZABAL ISLAND"
      },
      {
        "objectCd": "ARMS",
        "objectDsc": "ARMSTRONG"
      },
      {
        "objectCd": "ARAS",
        "objectDsc": "ARRAS"
      },
      {
        "objectCd": "AWPK",
        "objectDsc": "ARROW PARK"
      },
      {
        "objectCd": "ASCF",
        "objectDsc": "ASHCROFT"
      },
      {
        "objectCd": "ACSR",
        "objectDsc": "ASHCROFT RURAL"
      },
      {
        "objectCd": "ASCK",
        "objectDsc": "ASHTON CREEK"
      },
      {
        "objectCd": "ASPG",
        "objectDsc": "ASPEN GROVE"
      },
      {
        "objectCd": "ATHA",
        "objectDsc": "ATHALMER"
      },
      {
        "objectCd": "AHIS",
        "objectDsc": "ATHLONE ISLAND"
      },
      {
        "objectCd": "AKIS",
        "objectDsc": "ATKINSON ISLAND"
      },
      {
        "objectCd": "ATLN",
        "objectDsc": "ATLIN"
      },
      {
        "objectCd": "ATCH",
        "objectDsc": "ATTACHIE"
      },
      {
        "objectCd": "AUST",
        "objectDsc": "AUSTRALIAN"
      },
      {
        "objectCd": "AVLA",
        "objectDsc": "AVOLA"
      },
      {
        "objectCd": "BKCK",
        "objectDsc": "BAKER CREEK"
      },
      {
        "objectCd": "BKIS",
        "objectDsc": "BAKER ISLAND"
      },
      {
        "objectCd": "BVIS",
        "objectDsc": "BALAKLAVA ISLAND"
      },
      {
        "objectCd": "BALD",
        "objectDsc": "BALDONNEL"
      },
      {
        "objectCd": "BALF",
        "objectDsc": "BALFOUR"
      },
      {
        "objectCd": "BAMF",
        "objectDsc": "BAMFIELD"
      },
      {
        "objectCd": "BNKR",
        "objectDsc": "BANKEIR"
      },
      {
        "objectCd": "BSIS",
        "objectDsc": "BANKS ISLAND"
      },
      {
        "objectCd": "BKVL",
        "objectDsc": "BARKERVILLE"
      },
      {
        "objectCd": "BARH",
        "objectDsc": "BARNHARTVALE"
      },
      {
        "objectCd": "BAIS",
        "objectDsc": "BARON ISLAND"
      },
      {
        "objectCd": "BARR",
        "objectDsc": "BARRIERE"
      },
      {
        "objectCd": "BARV",
        "objectDsc": "BARRIERE RIVER"
      },
      {
        "objectCd": "BKLK",
        "objectDsc": "BAYNES LAKE"
      },
      {
        "objectCd": "BAFT",
        "objectDsc": "BEAR FLAT"
      },
      {
        "objectCd": "BRLK",
        "objectDsc": "BEAR LAKE"
      },
      {
        "objectCd": "BSLY",
        "objectDsc": "BEASLEY"
      },
      {
        "objectCd": "BEAT",
        "objectDsc": "BEATON"
      },
      {
        "objectCd": "BERV",
        "objectDsc": "BEATTON RIVER"
      },
      {
        "objectCd": "BVCV",
        "objectDsc": "BEAVER COVE"
      },
      {
        "objectCd": "BVFL",
        "objectDsc": "BEAVER FALLS"
      },
      {
        "objectCd": "BVDL",
        "objectDsc": "BEAVERDELL"
      },
      {
        "objectCd": "BVLY",
        "objectDsc": "BEAVERLEY"
      },
      {
        "objectCd": "BDNM",
        "objectDsc": "BEDNESTI NORMAN"
      },
      {
        "objectCd": "BELC",
        "objectDsc": "BELCARRA"
      },
      {
        "objectCd": "BLBL",
        "objectDsc": "BELLA BELLA"
      },
      {
        "objectCd": "BLCL",
        "objectDsc": "BELLA COOLA"
      },
      {
        "objectCd": "BLIG",
        "objectDsc": "BELL-IRVING"
      },
      {
        "objectCd": "BENN",
        "objectDsc": "BENNETT"
      },
      {
        "objectCd": "BRIS",
        "objectDsc": "BERRY ISLAND"
      },
      {
        "objectCd": "BSBG",
        "objectDsc": "BESSBOROUGH"
      },
      {
        "objectCd": "BIBR",
        "objectDsc": "BIG BAR"
      },
      {
        "objectCd": "BIBL",
        "objectDsc": "BIG BAR LAKE"
      },
      {
        "objectCd": "BICK",
        "objectDsc": "BIG CREEK"
      },
      {
        "objectCd": "BILK",
        "objectDsc": "BIG LAKE"
      },
      {
        "objectCd": "BLKR",
        "objectDsc": "BIG LAKE RANCH"
      },
      {
        "objectCd": "BIWH",
        "objectDsc": "BIG WHITE"
      },
      {
        "objectCd": "BCIS",
        "objectDsc": "BIRCH ISLAND"
      },
      {
        "objectCd": "BRKN",
        "objectDsc": "BIRKEN"
      },
      {
        "objectCd": "BLCK",
        "objectDsc": "BLACK CREEK"
      },
      {
        "objectCd": "BLPN",
        "objectDsc": "BLACK PINES"
      },
      {
        "objectCd": "BLPL",
        "objectDsc": "BLACKPOOL"
      },
      {
        "objectCd": "BLWR",
        "objectDsc": "BLACKWATER"
      },
      {
        "objectCd": "BWNR",
        "objectDsc": "BLACKWATER NORTH"
      },
      {
        "objectCd": "BLAE",
        "objectDsc": "BLAEBERRY"
      },
      {
        "objectCd": "BLWT",
        "objectDsc": "BLEWETT"
      },
      {
        "objectCd": "BLIS",
        "objectDsc": "BLIGH ISLAND"
      },
      {
        "objectCd": "BLBY",
        "objectDsc": "BLIND BAY"
      },
      {
        "objectCd": "BLCH",
        "objectDsc": "BLIND CHANNEL"
      },
      {
        "objectCd": "BLUB",
        "objectDsc": "BLUBBER BAY"
      },
      {
        "objectCd": "BLHL",
        "objectDsc": "BLUCHER HALL"
      },
      {
        "objectCd": "BLRV",
        "objectDsc": "BLUE RIVER"
      },
      {
        "objectCd": "BYCK",
        "objectDsc": "BLUEBERRY CREEK"
      },
      {
        "objectCd": "BYRI",
        "objectDsc": "BLUEBERRY RIVER IR"
      },
      {
        "objectCd": "BOBQ",
        "objectDsc": "BOB QUINN"
      },
      {
        "objectCd": "BQLK",
        "objectDsc": "BOB QUINN LAKE"
      },
      {
        "objectCd": "BONA",
        "objectDsc": "BONAPARTE IR"
      },
      {
        "objectCd": "BOSG",
        "objectDsc": "BOND SIDING"
      },
      {
        "objectCd": "BOIS",
        "objectDsc": "BONWICK ISLAND"
      },
      {
        "objectCd": "BBAR",
        "objectDsc": "BOSTON BAR"
      },
      {
        "objectCd": "BSTF",
        "objectDsc": "BOSTON FLAT"
      },
      {
        "objectCd": "BSWL",
        "objectDsc": "BOSWELL"
      },
      {
        "objectCd": "BCLK",
        "objectDsc": "BOUCHIE LAKE"
      },
      {
        "objectCd": "BOLK",
        "objectDsc": "BOUDREAU LAKE"
      },
      {
        "objectCd": "BOCY",
        "objectDsc": "BOULDER CITY"
      },
      {
        "objectCd": "BOW",
        "objectDsc": "BOWEN ISLAND"
      },
      {
        "objectCd": "BOPP",
        "objectDsc": "BOWRON LAKES PROVINCIAL PARK"
      },
      {
        "objectCd": "BWSR",
        "objectDsc": "BOWSER"
      },
      {
        "objectCd": "BWLK",
        "objectDsc": "BOWSER LAKE"
      },
      {
        "objectCd": "BYLK",
        "objectDsc": "BOYA LAKE"
      },
      {
        "objectCd": "BRLN",
        "objectDsc": "BRALORNE"
      },
      {
        "objectCd": "BRNC",
        "objectDsc": "BRENNAN CREEK"
      },
      {
        "objectCd": "BRAR",
        "objectDsc": "BRIAR"
      },
      {
        "objectCd": "BIVL",
        "objectDsc": "BRIDESVILLE"
      },
      {
        "objectCd": "BDLK",
        "objectDsc": "BRIDGE LAKE"
      },
      {
        "objectCd": "BRNT",
        "objectDsc": "BRILLIANT"
      },
      {
        "objectCd": "BRSC",
        "objectDsc": "BRISCO"
      },
      {
        "objectCd": "BRTB",
        "objectDsc": "BRITANNIA BEACH"
      },
      {
        "objectCd": "BKMR",
        "objectDsc": "BROOKMERE"
      },
      {
        "objectCd": "BGIS",
        "objectDsc": "BROUGHTON ISLAND"
      },
      {
        "objectCd": "BUKH",
        "objectDsc": "BUCKHORN"
      },
      {
        "objectCd": "BKRV",
        "objectDsc": "BUCKINGHORSE RIVER"
      },
      {
        "objectCd": "BFCK",
        "objectDsc": "BUFFALO CREEK"
      },
      {
        "objectCd": "BUIC",
        "objectDsc": "BUICK"
      },
      {
        "objectCd": "BURV",
        "objectDsc": "BULL RIVER"
      },
      {
        "objectCd": "BBY",
        "objectDsc": "BURNABY"
      },
      {
        "objectCd": "BYIS",
        "objectDsc": "BURNABY ISLAND"
      },
      {
        "objectCd": "BSLK",
        "objectDsc": "BURNS LAKE"
      },
      {
        "objectCd": "BRTO",
        "objectDsc": "BURTON"
      },
      {
        "objectCd": "BUTE",
        "objectDsc": "BUTE INLET"
      },
      {
        "objectCd": "CACK",
        "objectDsc": "CACHE CREEK"
      },
      {
        "objectCd": "CACV",
        "objectDsc": "CACHE CREEK RURAL"
      },
      {
        "objectCd": "CHLY",
        "objectDsc": "CAHILTY"
      },
      {
        "objectCd": "CVIS",
        "objectDsc": "CALVERT ISLAND"
      },
      {
        "objectCd": "CPIS",
        "objectDsc": "CAMPANIA ISLAND"
      },
      {
        "objectCd": "CBIS",
        "objectDsc": "CAMPBELL ISLAND"
      },
      {
        "objectCd": "CBRV",
        "objectDsc": "CAMPBELL RIVER"
      },
      {
        "objectCd": "CNFL",
        "objectDsc": "CANAL FLATS"
      },
      {
        "objectCd": "CMLK",
        "objectDsc": "CANIM LAKE"
      },
      {
        "objectCd": "CANO",
        "objectDsc": "CANOE"
      },
      {
        "objectCd": "CECK",
        "objectDsc": "CANOE CREEK"
      },
      {
        "objectCd": "FCYN",
        "objectDsc": "CANYON ALPINE"
      },
      {
        "objectCd": "CANY",
        "objectDsc": "CANYON HOT SPRINGS"
      },
      {
        "objectCd": "CSPK",
        "objectDsc": "CAPE SCOTT PARK"
      },
      {
        "objectCd": "CARV",
        "objectDsc": "CARIBOO RIVER"
      },
      {
        "objectCd": "CARM",
        "objectDsc": "CARMI"
      },
      {
        "objectCd": "CRLK",
        "objectDsc": "CARP LAKE"
      },
      {
        "objectCd": "CPLK",
        "objectDsc": "CARPENTER LAKE"
      },
      {
        "objectCd": "CASC",
        "objectDsc": "CASCADE"
      },
      {
        "objectCd": "CATL",
        "objectDsc": "CASTLEDALE"
      },
      {
        "objectCd": "CLGR",
        "objectDsc": "CASTLEGAR"
      },
      {
        "objectCd": "CLIS",
        "objectDsc": "CATALA ISLAND"
      },
      {
        "objectCd": "CSTN",
        "objectDsc": "CAWSTON"
      },
      {
        "objectCd": "CACS",
        "objectDsc": "CAYCUSE"
      },
      {
        "objectCd": "CELK",
        "objectDsc": "CECIL LAKE"
      },
      {
        "objectCd": "CRIS",
        "objectDsc": "CEDAR ISLAND"
      },
      {
        "objectCd": "CRVL",
        "objectDsc": "CEDARVALE"
      },
      {
        "objectCd": "CLST",
        "objectDsc": "CELISTA"
      },
      {
        "objectCd": "CSNC",
        "objectDsc": "CENTRAL SAANICH"
      },
      {
        "objectCd": "CHIS",
        "objectDsc": "CHAATL ISLAND"
      },
      {
        "objectCd": "CNLK",
        "objectDsc": "CHAPPERON LAKE"
      },
      {
        "objectCd": "CLLK",
        "objectDsc": "CHARLIE LAKE"
      },
      {
        "objectCd": "CHAS",
        "objectDsc": "CHASE"
      },
      {
        "objectCd": "CHAC",
        "objectDsc": "CHASE CREEK"
      },
      {
        "objectCd": "CHAR",
        "objectDsc": "CHASE RURAL"
      },
      {
        "objectCd": "CHSM",
        "objectDsc": "CHASM"
      },
      {
        "objectCd": "CMIS",
        "objectDsc": "CHATHAM ISLAND"
      },
      {
        "objectCd": "CHIR",
        "objectDsc": "CHEAM IR"
      },
      {
        "objectCd": "CHHL",
        "objectDsc": "CHEHALIS"
      },
      {
        "objectCd": "CHNS",
        "objectDsc": "CHEMAINUS"
      },
      {
        "objectCd": "CHCK",
        "objectDsc": "CHERRY CREEK"
      },
      {
        "objectCd": "CHVL",
        "objectDsc": "CHERRYVILLE"
      },
      {
        "objectCd": "CHES",
        "objectDsc": "CHESLATTA"
      },
      {
        "objectCd": "CTWD",
        "objectDsc": "CHETWYND"
      },
      {
        "objectCd": "CHEZ",
        "objectDsc": "CHEZACUT"
      },
      {
        "objectCd": "CFLK",
        "objectDsc": "CHIEF LAKE"
      },
      {
        "objectCd": "CLKF",
        "objectDsc": "CHILANKO FORKS"
      },
      {
        "objectCd": "CHIL",
        "objectDsc": "CHILLIWACK"
      },
      {
        "objectCd": "CHRV",
        "objectDsc": "CHILLIWACK RIVER VALLEY"
      },
      {
        "objectCd": "CMNL",
        "objectDsc": "CHIMNEY LAKE"
      },
      {
        "objectCd": "CKCV",
        "objectDsc": "CHINOOK COVE"
      },
      {
        "objectCd": "CHVY",
        "objectDsc": "CHRISTIAN VALLEY"
      },
      {
        "objectCd": "CSLK",
        "objectDsc": "CHRISTINA LAKE"
      },
      {
        "objectCd": "CHCH",
        "objectDsc": "CHU CHUA"
      },
      {
        "objectCd": "CINE",
        "objectDsc": "CINEMA"
      },
      {
        "objectCd": "CPLT",
        "objectDsc": "CLAPPERTON"
      },
      {
        "objectCd": "CLHT",
        "objectDsc": "CLAYHURST"
      },
      {
        "objectCd": "CLWR",
        "objectDsc": "CLEARWATER"
      },
      {
        "objectCd": "CLWT",
        "objectDsc": "CLEARWATER RURAL"
      },
      {
        "objectCd": "CLEM",
        "objectDsc": "CLEMRETTA"
      },
      {
        "objectCd": "CLTN",
        "objectDsc": "CLINTON"
      },
      {
        "objectCd": "CLTR",
        "objectDsc": "CLINTON RURAL"
      },
      {
        "objectCd": "CLTS",
        "objectDsc": "CLINTON SOUTH"
      },
      {
        "objectCd": "CZLK",
        "objectDsc": "CLUCULZ LAKE"
      },
      {
        "objectCd": "CLHB",
        "objectDsc": "COAL HARBOUR"
      },
      {
        "objectCd": "CLID",
        "objectDsc": "COAL ISLAND"
      },
      {
        "objectCd": "CRIV",
        "objectDsc": "COAL RIVER"
      },
      {
        "objectCd": "CLMT",
        "objectDsc": "COALMONT"
      },
      {
        "objectCd": "CBHL",
        "objectDsc": "COBBLE HILL"
      },
      {
        "objectCd": "CISI",
        "objectDsc": "COFFIN ISLAND IR"
      },
      {
        "objectCd": "CODM",
        "objectDsc": "COLDSTREAM"
      },
      {
        "objectCd": "CDCK",
        "objectDsc": "COLDSTREAM CREEK"
      },
      {
        "objectCd": "CLDW",
        "objectDsc": "COLDWATER"
      },
      {
        "objectCd": "CLLT",
        "objectDsc": "COLLEYMOUNT"
      },
      {
        "objectCd": "CLGS",
        "objectDsc": "COLUMBIA GARDENS"
      },
      {
        "objectCd": "CBLV",
        "objectDsc": "COLUMBIA VALLEY"
      },
      {
        "objectCd": "COLW",
        "objectDsc": "COLWOOD"
      },
      {
        "objectCd": "COMX",
        "objectDsc": "COMOX"
      },
      {
        "objectCd": "CPII",
        "objectDsc": "COMPTON ISLAND IR"
      },
      {
        "objectCd": "CISL",
        "objectDsc": "CONE ISLAND"
      },
      {
        "objectCd": "COOM",
        "objectDsc": "COOMBS"
      },
      {
        "objectCd": "CPCK",
        "objectDsc": "COOPER CREEK"
      },
      {
        "objectCd": "CRCK",
        "objectDsc": "COPPER CREEK"
      },
      {
        "objectCd": "CQLA",
        "objectDsc": "COQUIHALLA"
      },
      {
        "objectCd": "COQ",
        "objectDsc": "COQUITLAM"
      },
      {
        "objectCd": "CORB",
        "objectDsc": "CORBIN"
      },
      {
        "objectCd": "CTIS",
        "objectDsc": "CORTES ISLAND"
      },
      {
        "objectCd": "CTTD",
        "objectDsc": "COTTONWOOD"
      },
      {
        "objectCd": "CRTY",
        "objectDsc": "COURTENAY"
      },
      {
        "objectCd": "CUTL",
        "objectDsc": "COUTLEE"
      },
      {
        "objectCd": "CWBY",
        "objectDsc": "COWICHAN BAY"
      },
      {
        "objectCd": "CXIS",
        "objectDsc": "COX ISLAND"
      },
      {
        "objectCd": "CGCH",
        "objectDsc": "CRAIGELLACHIE"
      },
      {
        "objectCd": "CRJC",
        "objectDsc": "CRANBERRY JUNCTION"
      },
      {
        "objectCd": "CRBK",
        "objectDsc": "CRANBROOK"
      },
      {
        "objectCd": "CFBA",
        "objectDsc": "CRAWFORD BAY"
      },
      {
        "objectCd": "CSIS",
        "objectDsc": "CREASE ISLAND"
      },
      {
        "objectCd": "CCSR",
        "objectDsc": "CRESCENT SPUR"
      },
      {
        "objectCd": "CRVY",
        "objectDsc": "CRESCENT VALLEY"
      },
      {
        "objectCd": "CETN",
        "objectDsc": "CRESTON"
      },
      {
        "objectCd": "CROF",
        "objectDsc": "CROFTON"
      },
      {
        "objectCd": "CORV",
        "objectDsc": "CROSS RIVER"
      },
      {
        "objectCd": "CULT",
        "objectDsc": "CULTUS LAKE"
      },
      {
        "objectCd": "CMLD",
        "objectDsc": "CUMBERLAND"
      },
      {
        "objectCd": "DJGD",
        "objectDsc": "DAAJING GIIDS"
      },
      {
        "objectCd": "DNSK",
        "objectDsc": "DANSKIN"
      },
      {
        "objectCd": "DRCY",
        "objectDsc": "D'ARCY"
      },
      {
        "objectCd": "DARF",
        "objectDsc": "DARFIELD"
      },
      {
        "objectCd": "DVIS",
        "objectDsc": "DAVIES ISLAND"
      },
      {
        "objectCd": "DWCK",
        "objectDsc": "DAWSON CREEK"
      },
      {
        "objectCd": "DSCK",
        "objectDsc": "DEADMANS CREEK"
      },
      {
        "objectCd": "DSLK",
        "objectDsc": "DEASE LAKE"
      },
      {
        "objectCd": "DKLK",
        "objectDsc": "DECKER LAKE"
      },
      {
        "objectCd": "DCIS",
        "objectDsc": "DECOURCY ISLAND"
      },
      {
        "objectCd": "DPCK",
        "objectDsc": "DEEP CREEK"
      },
      {
        "objectCd": "DCKI",
        "objectDsc": "DEEP CREEK IR"
      },
      {
        "objectCd": "DHIS",
        "objectDsc": "DEHORSEY ISLAND"
      },
      {
        "objectCd": "DALK",
        "objectDsc": "DEKA LAKE"
      },
      {
        "objectCd": "DEL",
        "objectDsc": "DELTA"
      },
      {
        "objectCd": "DNIS",
        "objectDsc": "DENMAN ISLAND"
      },
      {
        "objectCd": "DYIS",
        "objectDsc": "DENNY ISLAND"
      },
      {
        "objectCd": "DRCH",
        "objectDsc": "DEROCHE"
      },
      {
        "objectCd": "DVIN",
        "objectDsc": "DEVINE"
      },
      {
        "objectCd": "DWDN",
        "objectDsc": "DEWDNEY"
      },
      {
        "objectCd": "DWIS",
        "objectDsc": "DEWDNEY ISLAND"
      },
      {
        "objectCd": "DAIS",
        "objectDsc": "DIANA ISLAND"
      },
      {
        "objectCd": "DGIS",
        "objectDsc": "DIGBY ISLAND"
      },
      {
        "objectCd": "DSCI",
        "objectDsc": "DISCOVERY ISLAND"
      },
      {
        "objectCd": "DITI",
        "objectDsc": "DITIDAHT"
      },
      {
        "objectCd": "DORV",
        "objectDsc": "DOE RIVER"
      },
      {
        "objectCd": "DGCK",
        "objectDsc": "DOG CREEK"
      },
      {
        "objectCd": "DOCK",
        "objectDsc": "DOG CREEK TNRD"
      },
      {
        "objectCd": "DGWD",
        "objectDsc": "DOGWOOD VALLEY"
      },
      {
        "objectCd": "DOIG",
        "objectDsc": "DOIG"
      },
      {
        "objectCd": "DPIS",
        "objectDsc": "DOLPHIN ISLAND"
      },
      {
        "objectCd": "DMCK",
        "objectDsc": "DOME CREEK"
      },
      {
        "objectCd": "DNLD",
        "objectDsc": "DONALD"
      },
      {
        "objectCd": "DMLG",
        "objectDsc": "DONALD LANDING"
      },
      {
        "objectCd": "DGLK",
        "objectDsc": "DOUGLAS LAKE"
      },
      {
        "objectCd": "DISI",
        "objectDsc": "DOVE ISLAND IR"
      },
      {
        "objectCd": "DWRV",
        "objectDsc": "DRIFTWOOD RIVER"
      },
      {
        "objectCd": "DNCN",
        "objectDsc": "DUNCAN"
      },
      {
        "objectCd": "DNLK",
        "objectDsc": "DUNCAN LAKE"
      },
      {
        "objectCd": "DDIS",
        "objectDsc": "DUNDAS ISLAND"
      },
      {
        "objectCd": "DUNK",
        "objectDsc": "DUNKLEY"
      },
      {
        "objectCd": "DULK",
        "objectDsc": "DUNN LAKE"
      },
      {
        "objectCd": "DNSR",
        "objectDsc": "DUNSTER"
      },
      {
        "objectCd": "EABY",
        "objectDsc": "EAGLE BAY"
      },
      {
        "objectCd": "EACK",
        "objectDsc": "EAGLE CREEK"
      },
      {
        "objectCd": "EBRL",
        "objectDsc": "EAST BARRIERE LAKE"
      },
      {
        "objectCd": "EBLK",
        "objectDsc": "EAST BLACKPOOL"
      },
      {
        "objectCd": "EAPI",
        "objectDsc": "EAST PINE"
      },
      {
        "objectCd": "ESMA",
        "objectDsc": "EAST SALMON ARM"
      },
      {
        "objectCd": "ESOK",
        "objectDsc": "EAST SOOKE"
      },
      {
        "objectCd": "EDIS",
        "objectDsc": "EDEN ISLAND"
      },
      {
        "objectCd": "EDWR",
        "objectDsc": "EDGEWATER"
      },
      {
        "objectCd": "EDWD",
        "objectDsc": "EDGEWOOD"
      },
      {
        "objectCd": "EKIS",
        "objectDsc": "EDWARD KING ISLAND"
      },
      {
        "objectCd": "EGMT",
        "objectDsc": "EGMONT"
      },
      {
        "objectCd": "9EKV",
        "objectDsc": "ELK VALLEY"
      },
      {
        "objectCd": "EKFR",
        "objectDsc": "ELKFORD"
      },
      {
        "objectCd": "EKHT",
        "objectDsc": "ELKHART"
      },
      {
        "objectCd": "ELKO",
        "objectDsc": "ELKO"
      },
      {
        "objectCd": "ELCP",
        "objectDsc": "ELSWORTH CAMP"
      },
      {
        "objectCd": "ENDA",
        "objectDsc": "ENDAKO"
      },
      {
        "objectCd": "EDBY",
        "objectDsc": "ENDERBY"
      },
      {
        "objectCd": "EGEN",
        "objectDsc": "ENGEN"
      },
      {
        "objectCd": "ERIC",
        "objectDsc": "ERICKSON"
      },
      {
        "objectCd": "ERIE",
        "objectDsc": "ERIE"
      },
      {
        "objectCd": "ERRN",
        "objectDsc": "ERRINGTON"
      },
      {
        "objectCd": "EQMT",
        "objectDsc": "ESQUIMALT"
      },
      {
        "objectCd": "FRSP",
        "objectDsc": "FAIRMONT HOT SPRINGS"
      },
      {
        "objectCd": "FKLD",
        "objectDsc": "FALKLAND"
      },
      {
        "objectCd": "FYBA",
        "objectDsc": "FANNY BAY"
      },
      {
        "objectCd": "FAIS",
        "objectDsc": "FARADAY ISLAND"
      },
      {
        "objectCd": "FRTN",
        "objectDsc": "FARMINGTON"
      },
      {
        "objectCd": "FRIS",
        "objectDsc": "FARRANT ISLAND"
      },
      {
        "objectCd": "FLCK",
        "objectDsc": "FARRELL CREEK"
      },
      {
        "objectCd": "FAQR",
        "objectDsc": "FAUQUIER"
      },
      {
        "objectCd": "FLHT",
        "objectDsc": "FELLERS HEIGHTS"
      },
      {
        "objectCd": "FDTB",
        "objectDsc": "FERNDALE-TABOR"
      },
      {
        "objectCd": "FERN",
        "objectDsc": "FERNIE"
      },
      {
        "objectCd": "FILD",
        "objectDsc": "FIELD"
      },
      {
        "objectCd": "FNIS",
        "objectDsc": "FIN ISLAND"
      },
      {
        "objectCd": "FIRE",
        "objectDsc": "FIRESIDE"
      },
      {
        "objectCd": "FIRV",
        "objectDsc": "FIRVALE"
      },
      {
        "objectCd": "FLAT",
        "objectDsc": "FLATHEAD"
      },
      {
        "objectCd": "FTRK",
        "objectDsc": "FLATROCK"
      },
      {
        "objectCd": "FLIS",
        "objectDsc": "FLEMING ISLAND"
      },
      {
        "objectCd": "FSIS",
        "objectDsc": "FLORES ISLAND"
      },
      {
        "objectCd": "FLYI",
        "objectDsc": "FLY ISLAND IR"
      },
      {
        "objectCd": "FONT",
        "objectDsc": "FONTAS"
      },
      {
        "objectCd": "FMFL",
        "objectDsc": "FOREMAN FLATS"
      },
      {
        "objectCd": "FRGV",
        "objectDsc": "FOREST GROVE"
      },
      {
        "objectCd": "FGCK",
        "objectDsc": "FORGETMENOT CREEK"
      },
      {
        "objectCd": "FBAB",
        "objectDsc": "FORT BABINE"
      },
      {
        "objectCd": "FFRA",
        "objectDsc": "FORT FRASER"
      },
      {
        "objectCd": "FGRG",
        "objectDsc": "FORT GEORGE NO 2"
      },
      {
        "objectCd": "FLIA",
        "objectDsc": "FORT LIARD"
      },
      {
        "objectCd": "FNEL",
        "objectDsc": "FORT NELSON"
      },
      {
        "objectCd": "FNEI",
        "objectDsc": "FORT NELSON IR"
      },
      {
        "objectCd": "FSJA",
        "objectDsc": "FORT ST JAMES"
      },
      {
        "objectCd": "FSJO",
        "objectDsc": "FORT ST JOHN"
      },
      {
        "objectCd": "FTST",
        "objectDsc": "FORT STEELE"
      },
      {
        "objectCd": "FWAR",
        "objectDsc": "FORT WARE"
      },
      {
        "objectCd": "FCLK",
        "objectDsc": "FRANCOIS LAKE"
      },
      {
        "objectCd": "FRAS",
        "objectDsc": "FRASER"
      },
      {
        "objectCd": "FRLK",
        "objectDsc": "FRASER LAKE"
      },
      {
        "objectCd": "9FSV",
        "objectDsc": "FRASER VALLEY"
      },
      {
        "objectCd": "FRDK",
        "objectDsc": "FREDERICK"
      },
      {
        "objectCd": "FRVA",
        "objectDsc": "FRUITVALE"
      },
      {
        "objectCd": "FURY",
        "objectDsc": "FURRY CREEK"
      },
      {
        "objectCd": "GBIS",
        "objectDsc": "GABRIOLA ISLAND"
      },
      {
        "objectCd": "GABY",
        "objectDsc": "GALENA BAY"
      },
      {
        "objectCd": "GLIS",
        "objectDsc": "GALIANO ISLAND"
      },
      {
        "objectCd": "GLWY",
        "objectDsc": "GALLOWAY"
      },
      {
        "objectCd": "GMBR",
        "objectDsc": "GAMBIER ISLAND"
      },
      {
        "objectCd": "GARH",
        "objectDsc": "GANG RANCH"
      },
      {
        "objectCd": "GDBA",
        "objectDsc": "GARDEN BAY"
      },
      {
        "objectCd": "GRBD",
        "objectDsc": "GARIBALDI PARK"
      },
      {
        "objectCd": "GNLL",
        "objectDsc": "GENELLE"
      },
      {
        "objectCd": "GMLG",
        "objectDsc": "GERMANSEN LANDING"
      },
      {
        "objectCd": "GBLG",
        "objectDsc": "GIBSON ISLAND"
      },
      {
        "objectCd": "GIB",
        "objectDsc": "GIBSONS"
      },
      {
        "objectCd": "GIIS",
        "objectDsc": "GIL ISLAND"
      },
      {
        "objectCd": "GFIS",
        "objectDsc": "GILFORD ISLAND"
      },
      {
        "objectCd": "GLSB",
        "objectDsc": "GILLIES BAY"
      },
      {
        "objectCd": "GINX",
        "objectDsc": "GINGOLX"
      },
      {
        "objectCd": "GSCM",
        "objectDsc": "GISCOME"
      },
      {
        "objectCd": "GTMX",
        "objectDsc": "GITANMAAX"
      },
      {
        "objectCd": "GTYW",
        "objectDsc": "GITANYOW"
      },
      {
        "objectCd": "GITS",
        "objectDsc": "GITAUS"
      },
      {
        "objectCd": "GYGK",
        "objectDsc": "GITSEGUKLA"
      },
      {
        "objectCd": "GTWK",
        "objectDsc": "GITWANGAK"
      },
      {
        "objectCd": "GTWW",
        "objectDsc": "GITWINKSIHLKW"
      },
      {
        "objectCd": "GLAD",
        "objectDsc": "GLADE"
      },
      {
        "objectCd": "GLNV",
        "objectDsc": "GLEN VOWELL"
      },
      {
        "objectCd": "GLEN",
        "objectDsc": "GLENORA"
      },
      {
        "objectCd": "GLMP",
        "objectDsc": "GLIMPSE LAKE"
      },
      {
        "objectCd": "GLDB",
        "objectDsc": "GOLD BRIDGE"
      },
      {
        "objectCd": "GLRV",
        "objectDsc": "GOLD RIVER"
      },
      {
        "objectCd": "GLDN",
        "objectDsc": "GOLDEN"
      },
      {
        "objectCd": "GLDP",
        "objectDsc": "GOLDEN EARS PARK"
      },
      {
        "objectCd": "GHLK",
        "objectDsc": "GOOD HOPE LAKE"
      },
      {
        "objectCd": "GDLW",
        "objectDsc": "GOODLOW"
      },
      {
        "objectCd": "GSIS",
        "objectDsc": "GOOSE ISLAND"
      },
      {
        "objectCd": "GHIS",
        "objectDsc": "GOSCHEN ISLAND"
      },
      {
        "objectCd": "GOIS",
        "objectDsc": "GOSSIP ISLAND"
      },
      {
        "objectCd": "GDFR",
        "objectDsc": "GRAND FORKS"
      },
      {
        "objectCd": "GRBH",
        "objectDsc": "GRANDVIEW BENCH"
      },
      {
        "objectCd": "GRAN",
        "objectDsc": "GRANISLE"
      },
      {
        "objectCd": "GRMR",
        "objectDsc": "GRASMERE"
      },
      {
        "objectCd": "GLIR",
        "objectDsc": "GRASSLANDS IR"
      },
      {
        "objectCd": "GIIR",
        "objectDsc": "GRASSY ISLAND IR"
      },
      {
        "objectCd": "GRPL",
        "objectDsc": "GRASSY PLAINS"
      },
      {
        "objectCd": "GRCK",
        "objectDsc": "GRAY CREEK"
      },
      {
        "objectCd": "GBLK",
        "objectDsc": "GREAT BEAVER LAKE"
      },
      {
        "objectCd": "GREL",
        "objectDsc": "GREEN LAKE"
      },
      {
        "objectCd": "GRVL",
        "objectDsc": "GREENVILLE"
      },
      {
        "objectCd": "GRWD",
        "objectDsc": "GREENWOOD"
      },
      {
        "objectCd": "GGIS",
        "objectDsc": "GREGORY ISLAND"
      },
      {
        "objectCd": "GRBI",
        "objectDsc": "GRIBBELL ISLAND"
      },
      {
        "objectCd": "GRRD",
        "objectDsc": "GRINDROD"
      },
      {
        "objectCd": "GRBR",
        "objectDsc": "GROUNDBIRCH"
      },
      {
        "objectCd": "GUND",
        "objectDsc": "GUNDY"
      },
      {
        "objectCd": "GDIS",
        "objectDsc": "GURD ISLAND"
      },
      {
        "objectCd": "GUTA",
        "objectDsc": "GUTAH"
      },
      {
        "objectCd": "HAGG",
        "objectDsc": "HAGENSBORG"
      },
      {
        "objectCd": "HAGW",
        "objectDsc": "HAGWILGET"
      },
      {
        "objectCd": "HMB",
        "objectDsc": "HALFMOON BAY"
      },
      {
        "objectCd": "HWRV",
        "objectDsc": "HALFWAY RIVER"
      },
      {
        "objectCd": "HWRI",
        "objectDsc": "HALFWAY RIVER IR"
      },
      {
        "objectCd": "HRPP",
        "objectDsc": "HAMBER PROVINCIAL PARK"
      },
      {
        "objectCd": "HNVL",
        "objectDsc": "HANCEVILLE"
      },
      {
        "objectCd": "HNIS",
        "objectDsc": "HANSON ISLAND"
      },
      {
        "objectCd": "HDIS",
        "objectDsc": "HARBLEDOWN ISLAND"
      },
      {
        "objectCd": "HWIS",
        "objectDsc": "HARDWICKE ISLAND"
      },
      {
        "objectCd": "HYIS",
        "objectDsc": "HARDY ISLAND"
      },
      {
        "objectCd": "HARR",
        "objectDsc": "HARRISON HOT SPRINGS"
      },
      {
        "objectCd": "HRIS",
        "objectDsc": "HARRISON ISLAND"
      },
      {
        "objectCd": "HRLK",
        "objectDsc": "HARRISON LAKE"
      },
      {
        "objectCd": "HRML",
        "objectDsc": "HARRISON MILLS"
      },
      {
        "objectCd": "HARP",
        "objectDsc": "HARROP"
      },
      {
        "objectCd": "HYBY",
        "objectDsc": "HARTLEY BAY"
      },
      {
        "objectCd": "HWDI",
        "objectDsc": "HARWOOD ISLAND"
      },
      {
        "objectCd": "HRFT",
        "objectDsc": "HASLER FLATS"
      },
      {
        "objectCd": "HATC",
        "objectDsc": "HAT CREEK"
      },
      {
        "objectCd": "HCIR",
        "objectDsc": "HAT CREEK IR"
      },
      {
        "objectCd": "HTZC",
        "objectDsc": "HATZIC"
      },
      {
        "objectCd": "HBIS",
        "objectDsc": "HAWKESBURY ISLAND"
      },
      {
        "objectCd": "HAZL",
        "objectDsc": "HAZELTON"
      },
      {
        "objectCd": "HAZR",
        "objectDsc": "HAZELTON RURAL"
      },
      {
        "objectCd": "HCTI",
        "objectDsc": "HECATE ISLAND"
      },
      {
        "objectCd": "HDLY",
        "objectDsc": "HEDLEY"
      },
      {
        "objectCd": "HEFC",
        "objectDsc": "HEFFLEY CREEK"
      },
      {
        "objectCd": "HFCK",
        "objectDsc": "HEFFLEY CREEK"
      },
      {
        "objectCd": "HLBI",
        "objectDsc": "HELBY ISLAND"
      },
      {
        "objectCd": "HELM",
        "objectDsc": "HELMUT"
      },
      {
        "objectCd": "HMVL",
        "objectDsc": "HEMLOCK VALLEY"
      },
      {
        "objectCd": "HXLK",
        "objectDsc": "HENDRIX LAKE"
      },
      {
        "objectCd": "HRYI",
        "objectDsc": "HENRY ISLAND"
      },
      {
        "objectCd": "HNDI",
        "objectDsc": "HERNANDO ISLAND"
      },
      {
        "objectCd": "HBBI",
        "objectDsc": "HIBBEN ISLAND"
      },
      {
        "objectCd": "HILD",
        "objectDsc": "HIGHLANDS"
      },
      {
        "objectCd": "HILS",
        "objectDsc": "HILLS"
      },
      {
        "objectCd": "HIXN",
        "objectDsc": "HIXON"
      },
      {
        "objectCd": "HXNS",
        "objectDsc": "HIXON SOUTH"
      },
      {
        "objectCd": "HOLB",
        "objectDsc": "HOLBERG"
      },
      {
        "objectCd": "HNYB",
        "objectDsc": "HONEYMOON BAY"
      },
      {
        "objectCd": "HOLK",
        "objectDsc": "HOODOO LAKE"
      },
      {
        "objectCd": "HOPE",
        "objectDsc": "HOPE"
      },
      {
        "objectCd": "HOIS",
        "objectDsc": "HOPE ISLAND"
      },
      {
        "objectCd": "HPKN",
        "objectDsc": "HOPKINS LANDING"
      },
      {
        "objectCd": "HPIS",
        "objectDsc": "HORNBY ISLAND"
      },
      {
        "objectCd": "HSFY",
        "objectDsc": "HORSEFLY"
      },
      {
        "objectCd": "HSMR",
        "objectDsc": "HOSMER"
      },
      {
        "objectCd": "HSCV",
        "objectDsc": "HOT SPRINGS COVE"
      },
      {
        "objectCd": "HOUS",
        "objectDsc": "HOUSTON"
      },
      {
        "objectCd": "HWSR",
        "objectDsc": "HOWSER"
      },
      {
        "objectCd": "HDHP",
        "objectDsc": "HUDSON'S HOPE"
      },
      {
        "objectCd": "HLIS",
        "objectDsc": "HULL ISLAND"
      },
      {
        "objectCd": "HNTI",
        "objectDsc": "HUNTER ISLAND"
      },
      {
        "objectCd": "HUPE",
        "objectDsc": "HUPEL"
      },
      {
        "objectCd": "HSIS",
        "objectDsc": "HURST ISLAND"
      },
      {
        "objectCd": "HCHL",
        "objectDsc": "HUTCHISON LAKE"
      },
      {
        "objectCd": "HXIS",
        "objectDsc": "HUXLEY ISLAND"
      },
      {
        "objectCd": "HYSL",
        "objectDsc": "HYAS LAKE"
      },
      {
        "objectCd": "IARM",
        "objectDsc": "INDIAN ARM"
      },
      {
        "objectCd": "INIS",
        "objectDsc": "INSECT ISLAND"
      },
      {
        "objectCd": "IGTF",
        "objectDsc": "INTEGRATED GANG TASK FORCE"
      },
      {
        "objectCd": "IVMR",
        "objectDsc": "INVERMERE"
      },
      {
        "objectCd": "IRVN",
        "objectDsc": "IRVINES LANDING"
      },
      {
        "objectCd": "ISKU",
        "objectDsc": "ISKUT"
      },
      {
        "objectCd": "ISLP",
        "objectDsc": "ISLE PIERRE"
      },
      {
        "objectCd": "JFLK",
        "objectDsc": "JACKFISH LAKE"
      },
      {
        "objectCd": "JACY",
        "objectDsc": "JADE CITY"
      },
      {
        "objectCd": "JFRY",
        "objectDsc": "JAFFRAY"
      },
      {
        "objectCd": "JMIS",
        "objectDsc": "JAMES ISLAND"
      },
      {
        "objectCd": "JRVS",
        "objectDsc": "JERVIS INLET"
      },
      {
        "objectCd": "JESM",
        "objectDsc": "JESMOND"
      },
      {
        "objectCd": "JDRV",
        "objectDsc": "JORDAN RIVER"
      },
      {
        "objectCd": "JUSK",
        "objectDsc": "JUSKATLA"
      },
      {
        "objectCd": "KDIR",
        "objectDsc": "KADIS IR"
      },
      {
        "objectCd": "KLDN",
        "objectDsc": "KALEDEN"
      },
      {
        "objectCd": "KMLP",
        "objectDsc": "KAMLOOPS"
      },
      {
        "objectCd": "KNKB",
        "objectDsc": "KANAKA BAR"
      },
      {
        "objectCd": "KASL",
        "objectDsc": "KASLO"
      },
      {
        "objectCd": "KTSI",
        "objectDsc": "KEATS ISLAND"
      },
      {
        "objectCd": "KYLK",
        "objectDsc": "KELLY LAKE"
      },
      {
        "objectCd": "KELY",
        "objectDsc": "KELLY LAKE TNRD"
      },
      {
        "objectCd": "KLWN",
        "objectDsc": "KELOWNA"
      },
      {
        "objectCd": "KEMA",
        "objectDsc": "KEMANO"
      },
      {
        "objectCd": "KYIS",
        "objectDsc": "KENNEDY ISLAND"
      },
      {
        "objectCd": "KDLK",
        "objectDsc": "KENNEDY LAKE"
      },
      {
        "objectCd": "KRMO",
        "objectDsc": "KEREMEOS"
      },
      {
        "objectCd": "KRSY",
        "objectDsc": "KERSLEY"
      },
      {
        "objectCd": "KILD",
        "objectDsc": "KILDONAN"
      },
      {
        "objectCd": "KNKN",
        "objectDsc": "KILKERRAN"
      },
      {
        "objectCd": "KBLY",
        "objectDsc": "KIMBERLEY"
      },
      {
        "objectCd": "KINA",
        "objectDsc": "KINASKAN"
      },
      {
        "objectCd": "KINC",
        "objectDsc": "KINCOLITH"
      },
      {
        "objectCd": "KGIT",
        "objectDsc": "KINGCOME INLET"
      },
      {
        "objectCd": "KGGT",
        "objectDsc": "KINGSGATE"
      },
      {
        "objectCd": "KNGV",
        "objectDsc": "KINGSVALE"
      },
      {
        "objectCd": "KISP",
        "objectDsc": "KISPIOX"
      },
      {
        "objectCd": "KSPV",
        "objectDsc": "KISPIOX VALLEY"
      },
      {
        "objectCd": "KITV",
        "objectDsc": "KITAMAAT VILLAGE"
      },
      {
        "objectCd": "KTNR",
        "objectDsc": "KITCHENER"
      },
      {
        "objectCd": "KITI",
        "objectDsc": "KITIMAT"
      },
      {
        "objectCd": "KITK",
        "objectDsc": "KITKATLA"
      },
      {
        "objectCd": "KITS",
        "objectDsc": "KITSAULT"
      },
      {
        "objectCd": "KITW",
        "objectDsc": "KITWANGA"
      },
      {
        "objectCd": "KLIS",
        "objectDsc": "KLAOITISIS ISLAND"
      },
      {
        "objectCd": "KLPP",
        "objectDsc": "KLAPPAN"
      },
      {
        "objectCd": "KLKL",
        "objectDsc": "KLEENA KLEENE"
      },
      {
        "objectCd": "KLEM",
        "objectDsc": "KLEMTU"
      },
      {
        "objectCd": "KGIN",
        "objectDsc": "KNIGHT INLET"
      },
      {
        "objectCd": "KNUF",
        "objectDsc": "KNUTSFORD"
      },
      {
        "objectCd": "KOKS",
        "objectDsc": "KOKSILAH"
      },
      {
        "objectCd": "KYBY",
        "objectDsc": "KOOTENAY BAY"
      },
      {
        "objectCd": "KTPK",
        "objectDsc": "KOOTENAY PARK"
      },
      {
        "objectCd": "KTPS",
        "objectDsc": "KOOTENAY PASS"
      },
      {
        "objectCd": "KCLK",
        "objectDsc": "KOTCHO LAKE"
      },
      {
        "objectCd": "KRTV",
        "objectDsc": "KRESTOVA"
      },
      {
        "objectCd": "KLDI",
        "objectDsc": "KSUI LA DAS IR"
      },
      {
        "objectCd": "KITM",
        "objectDsc": "KTSUMKAYLUM IR"
      },
      {
        "objectCd": "KULI",
        "objectDsc": "KULDEKDUMA IR"
      },
      {
        "objectCd": "KULD",
        "objectDsc": "KULDO"
      },
      {
        "objectCd": "KUIS",
        "objectDsc": "KUNGA ISLAND"
      },
      {
        "objectCd": "KHIS",
        "objectDsc": "KUNGHIT ISLAND"
      },
      {
        "objectCd": "KPIS",
        "objectDsc": "KUPER ISLAND"
      },
      {
        "objectCd": "KWDA",
        "objectDsc": "KWADACHA"
      },
      {
        "objectCd": "KWRV",
        "objectDsc": "KWINAMSS RIVER"
      },
      {
        "objectCd": "KYLI",
        "objectDsc": "KYE YAA LA IR"
      },
      {
        "objectCd": "KYUQ",
        "objectDsc": "KYUQUOT"
      },
      {
        "objectCd": "LADB",
        "objectDsc": "LAC DU BOIS"
      },
      {
        "objectCd": "LLHC",
        "objectDsc": "LAC LA HACHE"
      },
      {
        "objectCd": "LLJN",
        "objectDsc": "LAC LE JEUNE"
      },
      {
        "objectCd": "LDYS",
        "objectDsc": "LADYSMITH"
      },
      {
        "objectCd": "LDLW",
        "objectDsc": "LAIDLAW"
      },
      {
        "objectCd": "LKCY",
        "objectDsc": "LAKE COUNTRY"
      },
      {
        "objectCd": "LCWC",
        "objectDsc": "LAKE COWICHAN"
      },
      {
        "objectCd": "LKER",
        "objectDsc": "LAKE ERROCK"
      },
      {
        "objectCd": "LKLK",
        "objectDsc": "LAKELSE LAKE"
      },
      {
        "objectCd": "LGIS",
        "objectDsc": "LANGARA ISLAND"
      },
      {
        "objectCd": "LNGD",
        "objectDsc": "LANGDALE"
      },
      {
        "objectCd": "LGFD",
        "objectDsc": "LANGFORD"
      },
      {
        "objectCd": "LANG",
        "objectDsc": "LANGLEY"
      },
      {
        "objectCd": "LNVL",
        "objectDsc": "LANTZVILLE"
      },
      {
        "objectCd": "LZIS",
        "objectDsc": "LANZ ISLAND"
      },
      {
        "objectCd": "LARD",
        "objectDsc": "LARDEAU"
      },
      {
        "objectCd": "LQIS",
        "objectDsc": "LASQUETI ISLAND"
      },
      {
        "objectCd": "LAVI",
        "objectDsc": "LAVINGTON"
      },
      {
        "objectCd": "LXKW",
        "objectDsc": "LAX KW' ALAAMS"
      },
      {
        "objectCd": "LAXA",
        "objectDsc": "LAXGALTS AP"
      },
      {
        "objectCd": "LNCL",
        "objectDsc": "LEANCHOIL"
      },
      {
        "objectCd": "LECK",
        "objectDsc": "LEE CREEK"
      },
      {
        "objectCd": "LWIS",
        "objectDsc": "LEWIS ISLAND"
      },
      {
        "objectCd": "LDRV",
        "objectDsc": "LIARD RIVER"
      },
      {
        "objectCd": "LKLY",
        "objectDsc": "LIKELY"
      },
      {
        "objectCd": "LILL",
        "objectDsc": "LILLOOET"
      },
      {
        "objectCd": "LILR",
        "objectDsc": "LILLOOET RURAL"
      },
      {
        "objectCd": "LYLK",
        "objectDsc": "LILY LAKE"
      },
      {
        "objectCd": "LAIS",
        "objectDsc": "LINA ISLAND"
      },
      {
        "objectCd": "LNBH",
        "objectDsc": "LINDELL BEACH"
      },
      {
        "objectCd": "LBAY",
        "objectDsc": "LIONS BAY"
      },
      {
        "objectCd": "LSTR",
        "objectDsc": "LISTER"
      },
      {
        "objectCd": "LTFT",
        "objectDsc": "LITTLE FORT"
      },
      {
        "objectCd": "LDGP",
        "objectDsc": "LODGEPOLE"
      },
      {
        "objectCd": "LGLK",
        "objectDsc": "LOGAN LAKE"
      },
      {
        "objectCd": "LNBT",
        "objectDsc": "LONE BUTTE"
      },
      {
        "objectCd": "LNPR",
        "objectDsc": "LONE PRAIRIE"
      },
      {
        "objectCd": "LGBH",
        "objectDsc": "LONG BEACH"
      },
      {
        "objectCd": "LGWT",
        "objectDsc": "LONGWORTH"
      },
      {
        "objectCd": "LNLK",
        "objectDsc": "LOON LAKE"
      },
      {
        "objectCd": "LTIS",
        "objectDsc": "LORETTA ISLAND"
      },
      {
        "objectCd": "LSCK",
        "objectDsc": "LOUIS CREEK"
      },
      {
        "objectCd": "LARW",
        "objectDsc": "LOWER ARROW"
      },
      {
        "objectCd": "LNIC",
        "objectDsc": "LOWER NICOLA"
      },
      {
        "objectCd": "LWPT",
        "objectDsc": "LOWER POST"
      },
      {
        "objectCd": "LMBY",
        "objectDsc": "LUMBY"
      },
      {
        "objectCd": "LUND",
        "objectDsc": "LUND"
      },
      {
        "objectCd": "LYIS",
        "objectDsc": "LYELL ISLAND"
      },
      {
        "objectCd": "LYTN",
        "objectDsc": "LYTTON"
      },
      {
        "objectCd": "LYTR",
        "objectDsc": "LYTTON RURAL"
      },
      {
        "objectCd": "MCKN",
        "objectDsc": "MACKENZIE"
      },
      {
        "objectCd": "MZRU",
        "objectDsc": "MACKENZIE RURAL"
      },
      {
        "objectCd": "MDPK",
        "objectDsc": "MADEIRA PARK"
      },
      {
        "objectCd": "MGBY",
        "objectDsc": "MAGNA BAY"
      },
      {
        "objectCd": "MHRV",
        "objectDsc": "MAHATTA RIVER"
      },
      {
        "objectCd": "MDFL",
        "objectDsc": "MAHOOD FALLS"
      },
      {
        "objectCd": "MDCK",
        "objectDsc": "MAIDEN CREEK"
      },
      {
        "objectCd": "MTIS",
        "objectDsc": "MAITLAND ISLAND"
      },
      {
        "objectCd": "MLHT",
        "objectDsc": "MALAHAT"
      },
      {
        "objectCd": "MAKW",
        "objectDsc": "MALAKWA"
      },
      {
        "objectCd": "MMLK",
        "objectDsc": "MAMIT LAKE"
      },
      {
        "objectCd": "MNPK",
        "objectDsc": "MANNING PARK"
      },
      {
        "objectCd": "MNCK",
        "objectDsc": "MANSON CREEK"
      },
      {
        "objectCd": "MSLD",
        "objectDsc": "MANSONS LANDING"
      },
      {
        "objectCd": "MRDG",
        "objectDsc": "MAPLE RIDGE"
      },
      {
        "objectCd": "MARA",
        "objectDsc": "MARA"
      },
      {
        "objectCd": "MRCN",
        "objectDsc": "MARBLE CANYON"
      },
      {
        "objectCd": "MARG",
        "objectDsc": "MARGUERITE"
      },
      {
        "objectCd": "MAIS",
        "objectDsc": "MARINA ISLAND"
      },
      {
        "objectCd": "MRIS",
        "objectDsc": "MARS ISLAND"
      },
      {
        "objectCd": "MASS",
        "objectDsc": "MASSET"
      },
      {
        "objectCd": "MDIS",
        "objectDsc": "MAUD ISLAND"
      },
      {
        "objectCd": "MEIS",
        "objectDsc": "MAUDE ISLAND"
      },
      {
        "objectCd": "MLIS",
        "objectDsc": "MAURELLE ISLAND"
      },
      {
        "objectCd": "MXMH",
        "objectDsc": "MAXHAMISH"
      },
      {
        "objectCd": "MYIS",
        "objectDsc": "MAYNE ISLAND"
      },
      {
        "objectCd": "MYOK",
        "objectDsc": "MAYOOK"
      },
      {
        "objectCd": "MBRD",
        "objectDsc": "MCBRIDE"
      },
      {
        "objectCd": "MBRU",
        "objectDsc": "MCBRIDE RURAL"
      },
      {
        "objectCd": "MCIS",
        "objectDsc": "MCCAULEY ISLAND"
      },
      {
        "objectCd": "MCGL",
        "objectDsc": "MCGILLIVRAY LAKE"
      },
      {
        "objectCd": "MCGR",
        "objectDsc": "MCGREGOR"
      },
      {
        "objectCd": "MCKY",
        "objectDsc": "MCKAY ISLAND"
      },
      {
        "objectCd": "MLLK",
        "objectDsc": "MCLEESE LAKE"
      },
      {
        "objectCd": "MLDL",
        "objectDsc": "MCLEOD LAKE"
      },
      {
        "objectCd": "MDLK",
        "objectDsc": "MCLEOD LAKE RESERVE"
      },
      {
        "objectCd": "MCLR",
        "objectDsc": "MCLURE"
      },
      {
        "objectCd": "MWCK",
        "objectDsc": "MEADOW CREEK"
      },
      {
        "objectCd": "MDWL",
        "objectDsc": "MEADOW LAKE"
      },
      {
        "objectCd": "MSIS",
        "objectDsc": "MEARES ISLAND"
      },
      {
        "objectCd": "MGLK",
        "objectDsc": "MEGIN LAKE"
      },
      {
        "objectCd": "MVIS",
        "objectDsc": "MELVILLE ISLAND"
      },
      {
        "objectCd": "MRTT",
        "objectDsc": "MERRITT"
      },
      {
        "objectCd": "MELV",
        "objectDsc": "MERVILLE"
      },
      {
        "objectCd": "MSLK",
        "objectDsc": "MESACHIE LAKE"
      },
      {
        "objectCd": "METC",
        "objectDsc": "METCHOSIN"
      },
      {
        "objectCd": "MTKA",
        "objectDsc": "METLAKATLA"
      },
      {
        "objectCd": "MZDN",
        "objectDsc": "MEZIADIN"
      },
      {
        "objectCd": "MNLK",
        "objectDsc": "MEZIADIN LAKE"
      },
      {
        "objectCd": "MCCK",
        "objectDsc": "MICA CREEK"
      },
      {
        "objectCd": "MMIS",
        "objectDsc": "MIDSUMMER ISLAND"
      },
      {
        "objectCd": "MDWY",
        "objectDsc": "MIDWAY"
      },
      {
        "objectCd": "MLBY",
        "objectDsc": "MILL BAY"
      },
      {
        "objectCd": "MNNL",
        "objectDsc": "MINNIE LAKE"
      },
      {
        "objectCd": "MNIS",
        "objectDsc": "MINSTREL ISLAND"
      },
      {
        "objectCd": "MIOC",
        "objectDsc": "MIOCENE"
      },
      {
        "objectCd": "MILK",
        "objectDsc": "MIRROR LAKE"
      },
      {
        "objectCd": "MZLK",
        "objectDsc": "MISSEZULA LAKE"
      },
      {
        "objectCd": "MSSL",
        "objectDsc": "MISSEZULA LAKE TNRD"
      },
      {
        "objectCd": "MISS",
        "objectDsc": "MISSION"
      },
      {
        "objectCd": "MWRT",
        "objectDsc": "MIWORTH"
      },
      {
        "objectCd": "MOLK",
        "objectDsc": "MOBERLY LAKE"
      },
      {
        "objectCd": "MKIS",
        "objectDsc": "MOKETAS ISLAND"
      },
      {
        "objectCd": "MCHL",
        "objectDsc": "MOMICH LAKE"
      },
      {
        "objectCd": "MKMN",
        "objectDsc": "MONKMAN"
      },
      {
        "objectCd": "MTCK",
        "objectDsc": "MONTE CREEK"
      },
      {
        "objectCd": "MTLK",
        "objectDsc": "MONTE LAKE"
      },
      {
        "objectCd": "MNTY",
        "objectDsc": "MONTNEY"
      },
      {
        "objectCd": "MTRS",
        "objectDsc": "MONTROSE"
      },
      {
        "objectCd": "MSHT",
        "objectDsc": "MOOSE HEIGHTS"
      },
      {
        "objectCd": "MBIS",
        "objectDsc": "MORESBY ISLAND"
      },
      {
        "objectCd": "MRTN",
        "objectDsc": "MORICETOWN-WITSET FN"
      },
      {
        "objectCd": "MSVL",
        "objectDsc": "MOSSVALE"
      },
      {
        "objectCd": "MTCR",
        "objectDsc": "MOUNT CURRIE"
      },
      {
        "objectCd": "MTRN",
        "objectDsc": "MOUNT ROBSON"
      },
      {
        "objectCd": "MOYE",
        "objectDsc": "MOYIE"
      },
      {
        "objectCd": "MLMY",
        "objectDsc": "MT LE MORAY"
      },
      {
        "objectCd": "MRPP",
        "objectDsc": "MT ROBSON PROVINCIAL PARK"
      },
      {
        "objectCd": "MTFP",
        "objectDsc": "MT TERRY FOX PROVINCIAL PARK"
      },
      {
        "objectCd": "MTWN",
        "objectDsc": "MT WASHINGTON"
      },
      {
        "objectCd": "MDRV",
        "objectDsc": "MUD RIVER"
      },
      {
        "objectCd": "MGIS",
        "objectDsc": "MUDGE ISLAND"
      },
      {
        "objectCd": "MHLK",
        "objectDsc": "MUNCHO LAKE"
      },
      {
        "objectCd": "MHIS",
        "objectDsc": "MURCHISON ISLAND"
      },
      {
        "objectCd": "MURD",
        "objectDsc": "MURDALE"
      },
      {
        "objectCd": "MUSK",
        "objectDsc": "MUSKWA"
      },
      {
        "objectCd": "NKSP",
        "objectDsc": "NAKUSP"
      },
      {
        "objectCd": "NAMU",
        "objectDsc": "NAMU"
      },
      {
        "objectCd": "NNIM",
        "objectDsc": "NANAIMO"
      },
      {
        "objectCd": "NSBA",
        "objectDsc": "NANOOSE BAY"
      },
      {
        "objectCd": "NRMT",
        "objectDsc": "NARAMATA"
      },
      {
        "objectCd": "NCCK",
        "objectDsc": "NARCOSLI CREEK"
      },
      {
        "objectCd": "NSCP",
        "objectDsc": "NASS CAMP"
      },
      {
        "objectCd": "NZVY",
        "objectDsc": "NAZKO"
      },
      {
        "objectCd": "NCKO",
        "objectDsc": "NECHAKO"
      },
      {
        "objectCd": "NEDS",
        "objectDsc": "NEEDLES"
      },
      {
        "objectCd": "NLSN",
        "objectDsc": "NELSON"
      },
      {
        "objectCd": "NLIS",
        "objectDsc": "NELSON ISLAND"
      },
      {
        "objectCd": "NLWY",
        "objectDsc": "NELWAY"
      },
      {
        "objectCd": "NMVY",
        "objectDsc": "NEMAIAH VALLEY"
      },
      {
        "objectCd": "NSLK",
        "objectDsc": "NESS LAKE"
      },
      {
        "objectCd": "NWAH",
        "objectDsc": "NEW AIYANSH"
      },
      {
        "objectCd": "NDVR",
        "objectDsc": "NEW DENVER"
      },
      {
        "objectCd": "NHZN",
        "objectDsc": "NEW HAZELTON"
      },
      {
        "objectCd": "NEWW",
        "objectDsc": "NEW WESTMINSTER"
      },
      {
        "objectCd": "NEWG",
        "objectDsc": "NEWGATE"
      },
      {
        "objectCd": "NCLK",
        "objectDsc": "NICOLA LAKE"
      },
      {
        "objectCd": "NIIS",
        "objectDsc": "NIGEI ISLAND"
      },
      {
        "objectCd": "NIMP",
        "objectDsc": "NIMPKISH"
      },
      {
        "objectCd": "NMLK",
        "objectDsc": "NIMPO LAKE"
      },
      {
        "objectCd": "NISK",
        "objectDsc": "NISKONLITH LAKE"
      },
      {
        "objectCd": "NOOA",
        "objectDsc": "NOOAITCH"
      },
      {
        "objectCd": "NKIS",
        "objectDsc": "NOOTKA ISLAND"
      },
      {
        "objectCd": "9NTS",
        "objectDsc": "NOOTKA SOUND"
      },
      {
        "objectCd": "NORA",
        "objectDsc": "NORALEE"
      },
      {
        "objectCd": "NBRL",
        "objectDsc": "NORTH BARRIERE LAKE"
      },
      {
        "objectCd": "NBND",
        "objectDsc": "NORTH BEND"
      },
      {
        "objectCd": "NBON",
        "objectDsc": "NORTH BONAPARTE"
      },
      {
        "objectCd": "NBIS",
        "objectDsc": "NORTH BROUGHTON ISLAND"
      },
      {
        "objectCd": "NFLK",
        "objectDsc": "NORTH FALKLAND"
      },
      {
        "objectCd": "NGAB",
        "objectDsc": "NORTH GABLES"
      },
      {
        "objectCd": "9NIL",
        "objectDsc": "NORTH ISLAND"
      },
      {
        "objectCd": "NKEL",
        "objectDsc": "NORTH KELLY"
      },
      {
        "objectCd": "NKLK",
        "objectDsc": "NORTH KINBASKET LAKE"
      },
      {
        "objectCd": "NMAR",
        "objectDsc": "NORTH MARA"
      },
      {
        "objectCd": "NPIS",
        "objectDsc": "NORTH PENDER ISLAND"
      },
      {
        "objectCd": "NRPN",
        "objectDsc": "NORTH PINE"
      },
      {
        "objectCd": "NSAA",
        "objectDsc": "NORTH SAANICH"
      },
      {
        "objectCd": "NSHO",
        "objectDsc": "NORTH SHORE"
      },
      {
        "objectCd": "NTIR",
        "objectDsc": "NORTH THOMPSON IR"
      },
      {
        "objectCd": "NVAN",
        "objectDsc": "NORTH VANCOUVER"
      },
      {
        "objectCd": "NWES",
        "objectDsc": "NORTH WESTSIDE"
      },
      {
        "objectCd": "NOHL",
        "objectDsc": "NOTCH HILL"
      },
      {
        "objectCd": "NKKL",
        "objectDsc": "NUKKO LAKE"
      },
      {
        "objectCd": "OKBY",
        "objectDsc": "OAK BAY"
      },
      {
        "objectCd": "OSIS",
        "objectDsc": "OASIS"
      },
      {
        "objectCd": "OBIS",
        "objectDsc": "OBSTRUCTION ISLAND"
      },
      {
        "objectCd": "OCFL",
        "objectDsc": "OCEAN FALLS"
      },
      {
        "objectCd": "OKNF",
        "objectDsc": "OKANAGAN FALLS"
      },
      {
        "objectCd": "ONIR",
        "objectDsc": "OKANAGAN IR NORTH"
      },
      {
        "objectCd": "OSIR",
        "objectDsc": "OKANAGAN IR SOUTH"
      },
      {
        "objectCd": "OLLA",
        "objectDsc": "OLALLA"
      },
      {
        "objectCd": "OLVR",
        "objectDsc": "OLIVER"
      },
      {
        "objectCd": "OILK",
        "objectDsc": "ONE ISLAND LAKE"
      },
      {
        "objectCd": "OORV",
        "objectDsc": "OONA RIVER"
      },
      {
        "objectCd": "OTCH",
        "objectDsc": "OOTISCHENIA"
      },
      {
        "objectCd": "OOLK",
        "objectDsc": "OOTSA LAKE"
      },
      {
        "objectCd": "OSBN",
        "objectDsc": "OSBORN"
      },
      {
        "objectCd": "OSYO",
        "objectDsc": "OSOYOOS"
      },
      {
        "objectCd": "OUT",
        "objectDsc": "OTTER POINT"
      },
      {
        "objectCd": "OWEK",
        "objectDsc": "OWEEKENO"
      },
      {
        "objectCd": "OWIS",
        "objectDsc": "OWL ISLAND"
      },
      {
        "objectCd": "PRPN",
        "objectDsc": "PACIFIC RIM PARK NORTH"
      },
      {
        "objectCd": "PRPS",
        "objectDsc": "PACIFIC RIM PARK SOUTH"
      },
      {
        "objectCd": "PALL",
        "objectDsc": "PALLING"
      },
      {
        "objectCd": "PANO",
        "objectDsc": "PANORAMA"
      },
      {
        "objectCd": "PKIS",
        "objectDsc": "PARKER ISLAND"
      },
      {
        "objectCd": "PAVL",
        "objectDsc": "PARKSVILLE"
      },
      {
        "objectCd": "PIRP",
        "objectDsc": "PARSNIP"
      },
      {
        "objectCd": "PRSN",
        "objectDsc": "PARSON"
      },
      {
        "objectCd": "PRIL",
        "objectDsc": "PARSON ISLAND"
      },
      {
        "objectCd": "PSKL",
        "objectDsc": "PASKA LAKE"
      },
      {
        "objectCd": "PSCK",
        "objectDsc": "PASS CREEK"
      },
      {
        "objectCd": "PSMR",
        "objectDsc": "PASSMORE"
      },
      {
        "objectCd": "PLLK",
        "objectDsc": "PAUL LAKE"
      },
      {
        "objectCd": "PVLN",
        "objectDsc": "PAVILION"
      },
      {
        "objectCd": "PCLD",
        "objectDsc": "PEACHLAND"
      },
      {
        "objectCd": "PSIS",
        "objectDsc": "PEARSE ISLAND"
      },
      {
        "objectCd": "PEEJ",
        "objectDsc": "PEEJAY"
      },
      {
        "objectCd": "PEMB",
        "objectDsc": "PEMBERTON"
      },
      {
        "objectCd": "PMBM",
        "objectDsc": "PEMBERTON MEADOWS"
      },
      {
        "objectCd": "PENK",
        "objectDsc": "PENASK SUMMIT"
      },
      {
        "objectCd": "PDDR",
        "objectDsc": "PEND DOREILLE"
      },
      {
        "objectCd": "PHBR",
        "objectDsc": "PENDER HARBOUR"
      },
      {
        "objectCd": "PDIS",
        "objectDsc": "PENDER ISLAND"
      },
      {
        "objectCd": "PNIS",
        "objectDsc": "PENELAKUT ISLAND"
      },
      {
        "objectCd": "PENN",
        "objectDsc": "PENNY"
      },
      {
        "objectCd": "PNTN",
        "objectDsc": "PENTICTON"
      },
      {
        "objectCd": "PRSG",
        "objectDsc": "PERRY SIDING"
      },
      {
        "objectCd": "PETH",
        "objectDsc": "PETER HOPE LAKE"
      },
      {
        "objectCd": "PRIS",
        "objectDsc": "PIERS ISLAND"
      },
      {
        "objectCd": "PNLK",
        "objectDsc": "PINANTAN LAKE"
      },
      {
        "objectCd": "PINC",
        "objectDsc": "PINCHI"
      },
      {
        "objectCd": "PILK",
        "objectDsc": "PINCHI LAKE"
      },
      {
        "objectCd": "PIPS",
        "objectDsc": "PINE PASS"
      },
      {
        "objectCd": "PNPE",
        "objectDsc": "PINE PASS EAST"
      },
      {
        "objectCd": "PNPW",
        "objectDsc": "PINE PASS WEST"
      },
      {
        "objectCd": "PNVY",
        "objectDsc": "PINE VALLEY"
      },
      {
        "objectCd": "PNVW",
        "objectDsc": "PINEVIEW"
      },
      {
        "objectCd": "PIVW",
        "objectDsc": "PINEVIEW FFG"
      },
      {
        "objectCd": "PNMT",
        "objectDsc": "PINK MOUNTAIN"
      },
      {
        "objectCd": "PTIS",
        "objectDsc": "PITT ISLAND"
      },
      {
        "objectCd": "PITT",
        "objectDsc": "PITT MEADOWS"
      },
      {
        "objectCd": "POOL",
        "objectDsc": "POOLEY ISLAND"
      },
      {
        "objectCd": "PKUM",
        "objectDsc": "POPKUM"
      },
      {
        "objectCd": "PCIS",
        "objectDsc": "PORCHER ISLAND"
      },
      {
        "objectCd": "PTAI",
        "objectDsc": "PORT ALBERNI"
      },
      {
        "objectCd": "PTAN",
        "objectDsc": "PORT ALBION"
      },
      {
        "objectCd": "PTAC",
        "objectDsc": "PORT ALICE"
      },
      {
        "objectCd": "PTCS",
        "objectDsc": "PORT CLEMENTS"
      },
      {
        "objectCd": "POCO",
        "objectDsc": "PORT COQUITLAM"
      },
      {
        "objectCd": "PTED",
        "objectDsc": "PORT EDWARD"
      },
      {
        "objectCd": "PTEN",
        "objectDsc": "PORT ESSINGTON"
      },
      {
        "objectCd": "PTHY",
        "objectDsc": "PORT HARDY"
      },
      {
        "objectCd": "9PTM",
        "objectDsc": "PORT MANN"
      },
      {
        "objectCd": "PTML",
        "objectDsc": "PORT MCNEILL"
      },
      {
        "objectCd": "PTME",
        "objectDsc": "PORT MELLON"
      },
      {
        "objectCd": "PMDY",
        "objectDsc": "PORT MOODY"
      },
      {
        "objectCd": "PTNV",
        "objectDsc": "PORT NEVILLE"
      },
      {
        "objectCd": "PTRF",
        "objectDsc": "PORT RENFREW"
      },
      {
        "objectCd": "PLIS",
        "objectDsc": "PORTLAND ISLAND"
      },
      {
        "objectCd": "PCCP",
        "objectDsc": "POUCE COUPE"
      },
      {
        "objectCd": "PWKG",
        "objectDsc": "POWDER KING"
      },
      {
        "objectCd": "PWRV",
        "objectDsc": "POWELL RIVER"
      },
      {
        "objectCd": "PEIS",
        "objectDsc": "PRESCOTT ISLAND"
      },
      {
        "objectCd": "PSP",
        "objectDsc": "PRESPATOU"
      },
      {
        "objectCd": "PSSL",
        "objectDsc": "PRESSY LAKE"
      },
      {
        "objectCd": "PRCI",
        "objectDsc": "PRICE ISLAND"
      },
      {
        "objectCd": "PSLY",
        "objectDsc": "PRIESTLY"
      },
      {
        "objectCd": "PGRG",
        "objectDsc": "PRINCE GEORGE"
      },
      {
        "objectCd": "PRRU",
        "objectDsc": "PRINCE RUPERT"
      },
      {
        "objectCd": "PROI",
        "objectDsc": "PRINCESS ROYAL ISLAND"
      },
      {
        "objectCd": "PRNT",
        "objectDsc": "PRINCETON"
      },
      {
        "objectCd": "PRTD",
        "objectDsc": "PRITCHARD"
      },
      {
        "objectCd": "PRCT",
        "objectDsc": "PROCTER"
      },
      {
        "objectCd": "PRGR",
        "objectDsc": "PROGRESS"
      },
      {
        "objectCd": "PRRV",
        "objectDsc": "PROPHET RIVER"
      },
      {
        "objectCd": "PURD",
        "objectDsc": "PURDEN"
      },
      {
        "objectCd": "QDIS",
        "objectDsc": "QUADRA ISLAND"
      },
      {
        "objectCd": "QLBH",
        "objectDsc": "QUALICUM BEACH"
      },
      {
        "objectCd": "QKCV",
        "objectDsc": "QUATHIASKI COVE"
      },
      {
        "objectCd": "QTSN",
        "objectDsc": "QUATSINO"
      },
      {
        "objectCd": "QNCH",
        "objectDsc": "QUEEN CHARLOTTE"
      },
      {
        "objectCd": "QCIS",
        "objectDsc": "QUEEN CHARLOTTE ISLANDS"
      },
      {
        "objectCd": "QNBA",
        "objectDsc": "QUEENS BAY"
      },
      {
        "objectCd": "QSNL",
        "objectDsc": "QUESNEL"
      },
      {
        "objectCd": "QSIS",
        "objectDsc": "QUESNEL LAKE"
      },
      {
        "objectCd": "QLCH",
        "objectDsc": "QUILCHENA"
      },
      {
        "objectCd": "RADM",
        "objectDsc": "RADIUM HOT SPRINGS"
      },
      {
        "objectCd": "RYIS",
        "objectDsc": "RAMSAY ISLAND"
      },
      {
        "objectCd": "RLIS",
        "objectDsc": "RANDALL ISLAND"
      },
      {
        "objectCd": "RBVG",
        "objectDsc": "RASPBERRY"
      },
      {
        "objectCd": "RDIS",
        "objectDsc": "READ ISLAND"
      },
      {
        "objectCd": "REDL",
        "objectDsc": "RED LAKE"
      },
      {
        "objectCd": "RROK",
        "objectDsc": "RED ROCK"
      },
      {
        "objectCd": "REDS",
        "objectDsc": "REDSTONE"
      },
      {
        "objectCd": "RFIS",
        "objectDsc": "REEF ISLAND"
      },
      {
        "objectCd": "REIS",
        "objectDsc": "REES ISLAND"
      },
      {
        "objectCd": "RFCV",
        "objectDsc": "REFUGE COVE"
      },
      {
        "objectCd": "RIIS",
        "objectDsc": "REID ISLAND"
      },
      {
        "objectCd": "RILK",
        "objectDsc": "REID LAKE"
      },
      {
        "objectCd": "RNSD",
        "objectDsc": "RENNELL SOUND"
      },
      {
        "objectCd": "RNIS",
        "objectDsc": "RENNISON ISLAND"
      },
      {
        "objectCd": "RVST",
        "objectDsc": "REVELSTOKE"
      },
      {
        "objectCd": "RCIS",
        "objectDsc": "RICHARDSON ISLAND"
      },
      {
        "objectCd": "RMD",
        "objectDsc": "RICHMOND"
      },
      {
        "objectCd": "9RGM",
        "objectDsc": "RIDGE MEADOWS"
      },
      {
        "objectCd": "RNDL",
        "objectDsc": "RIONDEL"
      },
      {
        "objectCd": "RSCK",
        "objectDsc": "RISKE CREEK"
      },
      {
        "objectCd": "RCR",
        "objectDsc": "ROBERTS CREEK"
      },
      {
        "objectCd": "RTCK",
        "objectDsc": "ROBERTSON CREEK"
      },
      {
        "objectCd": "RBSN",
        "objectDsc": "ROBSON"
      },
      {
        "objectCd": "RCCK",
        "objectDsc": "ROCK CREEK"
      },
      {
        "objectCd": "RKIS",
        "objectDsc": "RODERICK ISLAND"
      },
      {
        "objectCd": "RELK",
        "objectDsc": "ROE LAKE"
      },
      {
        "objectCd": "RGPS",
        "objectDsc": "ROGERS PASS"
      },
      {
        "objectCd": "ROLL",
        "objectDsc": "ROLLA"
      },
      {
        "objectCd": "RSVL",
        "objectDsc": "ROOSVILLE"
      },
      {
        "objectCd": "RSLK",
        "objectDsc": "ROSE LAKE"
      },
      {
        "objectCd": "RSPR",
        "objectDsc": "ROSE PRAIRIE"
      },
      {
        "objectCd": "RSBY",
        "objectDsc": "ROSEBERY"
      },
      {
        "objectCd": "RSLD",
        "objectDsc": "ROSSLAND"
      },
      {
        "objectCd": "RSWD",
        "objectDsc": "ROSSWOOD"
      },
      {
        "objectCd": "ROYS",
        "objectDsc": "ROYSTON"
      },
      {
        "objectCd": "RUBY",
        "objectDsc": "RUBY LAKE"
      },
      {
        "objectCd": "RXIS",
        "objectDsc": "RUXTON ISLAND"
      },
      {
        "objectCd": "SNCH",
        "objectDsc": "SAANICH"
      },
      {
        "objectCd": "SALM",
        "objectDsc": "SALMO"
      },
      {
        "objectCd": "SLAM",
        "objectDsc": "SALMON ARM"
      },
      {
        "objectCd": "SLRI",
        "objectDsc": "SALMON RIVER"
      },
      {
        "objectCd": "SRIR",
        "objectDsc": "SALMON RIVER IR"
      },
      {
        "objectCd": "SLVY",
        "objectDsc": "SALMON VALLEY"
      },
      {
        "objectCd": "SSIS",
        "objectDsc": "SALT SPRING ISLAND"
      },
      {
        "objectCd": "SLTB",
        "objectDsc": "SALTERY BAY"
      },
      {
        "objectCd": "SNJF",
        "objectDsc": "SAN JOSEF"
      },
      {
        "objectCd": "SANC",
        "objectDsc": "SANCA"
      },
      {
        "objectCd": "SLIS",
        "objectDsc": "SANDILANDS ISLAND"
      },
      {
        "objectCd": "SNDS",
        "objectDsc": "SANDSPIT"
      },
      {
        "objectCd": "SHIS",
        "objectDsc": "SARAH ISLAND"
      },
      {
        "objectCd": "SRTA",
        "objectDsc": "SARITA"
      },
      {
        "objectCd": "SNIS",
        "objectDsc": "SATURNA ISLAND"
      },
      {
        "objectCd": "SVIS",
        "objectDsc": "SAVARY ISLAND"
      },
      {
        "objectCd": "SAVN",
        "objectDsc": "SAVONA"
      },
      {
        "objectCd": "SYWD",
        "objectDsc": "SAYWARD"
      },
      {
        "objectCd": "SCCK",
        "objectDsc": "SCOTCH CREEK"
      },
      {
        "objectCd": "SEC",
        "objectDsc": "SECHELT"
      },
      {
        "objectCd": "STNP",
        "objectDsc": "SETON PORTAGE"
      },
      {
        "objectCd": "SEWA",
        "objectDsc": "SEWALL"
      },
      {
        "objectCd": "SWIN",
        "objectDsc": "SEWELL INLET"
      },
      {
        "objectCd": "SARM",
        "objectDsc": "SEYMOUR ARM"
      },
      {
        "objectCd": "SYIN",
        "objectDsc": "SEYMOUR INLET"
      },
      {
        "objectCd": "SHAL",
        "objectDsc": "SHALALTH"
      },
      {
        "objectCd": "SHLK",
        "objectDsc": "SHAWNIGAN LAKE"
      },
      {
        "objectCd": "SWTR",
        "objectDsc": "SHEARWATER"
      },
      {
        "objectCd": "SHEL",
        "objectDsc": "SHELLEY"
      },
      {
        "objectCd": "SHGN",
        "objectDsc": "SHELL-GLEN"
      },
      {
        "objectCd": "SRLY",
        "objectDsc": "SHIRLEY"
      },
      {
        "objectCd": "SHAC",
        "objectDsc": "SHOREACRES"
      },
      {
        "objectCd": "SHBH",
        "objectDsc": "SHUTTY BENCH"
      },
      {
        "objectCd": "SCMS",
        "objectDsc": "SICAMOUS"
      },
      {
        "objectCd": "SDNY",
        "objectDsc": "SIDNEY"
      },
      {
        "objectCd": "SDIS",
        "objectDsc": "SIDNEY ISLAND"
      },
      {
        "objectCd": "SRRA",
        "objectDsc": "SIERRA"
      },
      {
        "objectCd": "SKNI",
        "objectDsc": "SIKANNI"
      },
      {
        "objectCd": "SLVS",
        "objectDsc": "SILVER SANDS"
      },
      {
        "objectCd": "SLTN",
        "objectDsc": "SILVERTON"
      },
      {
        "objectCd": "SNML",
        "objectDsc": "SINCLAIR MILLS"
      },
      {
        "objectCd": "SRDR",
        "objectDsc": "SIRDAR"
      },
      {
        "objectCd": "SKNA",
        "objectDsc": "SKEENA"
      },
      {
        "objectCd": "SKIR",
        "objectDsc": "SKEETCHESTN IR"
      },
      {
        "objectCd": "SKDG",
        "objectDsc": "SKIDEGATE"
      },
      {
        "objectCd": "SKMK",
        "objectDsc": "SKOOKUMCHUCK"
      },
      {
        "objectCd": "SLCN",
        "objectDsc": "SLOCAN"
      },
      {
        "objectCd": "SNPK",
        "objectDsc": "SLOCAN PARK"
      },
      {
        "objectCd": "SMIS",
        "objectDsc": "SMITH ISLAND"
      },
      {
        "objectCd": "SMTS",
        "objectDsc": "SMITHERS"
      },
      {
        "objectCd": "SNYD",
        "objectDsc": "SNYDER"
      },
      {
        "objectCd": "SMSP",
        "objectDsc": "SOAMES POINT"
      },
      {
        "objectCd": "SDCK",
        "objectDsc": "SODA CREEK"
      },
      {
        "objectCd": "SNTL",
        "objectDsc": "SOINTULA"
      },
      {
        "objectCd": "SLQA",
        "objectDsc": "SOLSQUA"
      },
      {
        "objectCd": "SMVI",
        "objectDsc": "SOMERVILLE ISLAND"
      },
      {
        "objectCd": "SOIS",
        "objectDsc": "SONORA ISLAND"
      },
      {
        "objectCd": "SOKE",
        "objectDsc": "SOOKE"
      },
      {
        "objectCd": "SRNT",
        "objectDsc": "SORRENTO"
      },
      {
        "objectCd": "SDAW",
        "objectDsc": "SOUTH DAWSON"
      },
      {
        "objectCd": "SHAZ",
        "objectDsc": "SOUTH HAZELTON"
      },
      {
        "objectCd": "9SIL",
        "objectDsc": "SOUTH ISLAND"
      },
      {
        "objectCd": "SKLK",
        "objectDsc": "SOUTH KINBASKET LAKE"
      },
      {
        "objectCd": "SPIS",
        "objectDsc": "SOUTH PENDER ISLAND"
      },
      {
        "objectCd": "SSLC",
        "objectDsc": "SOUTH SLOCAN"
      },
      {
        "objectCd": "SSPK",
        "objectDsc": "SOUTH STRATHCONA PARK"
      },
      {
        "objectCd": "STAY",
        "objectDsc": "SOUTH TAYLOR"
      },
      {
        "objectCd": "SBNK",
        "objectDsc": "SOUTHBANK"
      },
      {
        "objectCd": "9SED",
        "objectDsc": "SOUTHEAST DISTRICT"
      },
      {
        "objectCd": "SPAL",
        "objectDsc": "SPALLUMCHEEN"
      },
      {
        "objectCd": "SPWD",
        "objectDsc": "SPARWOOD"
      },
      {
        "objectCd": "SPTZ",
        "objectDsc": "SPATSIZI"
      },
      {
        "objectCd": "SPAT",
        "objectDsc": "SPATSUM"
      },
      {
        "objectCd": "SPSB",
        "objectDsc": "SPENCES BRIDGE"
      },
      {
        "objectCd": "SPIC",
        "objectDsc": "SPICER ISLAND"
      },
      {
        "objectCd": "SLMN",
        "objectDsc": "SPILLIMACHEEN"
      },
      {
        "objectCd": "SPLK",
        "objectDsc": "SPOKIN LAKE"
      },
      {
        "objectCd": "SPHS",
        "objectDsc": "SPRINGHOUSE"
      },
      {
        "objectCd": "SPZM",
        "objectDsc": "SPUZZUM"
      },
      {
        "objectCd": "SQUA",
        "objectDsc": "SQUAMISH"
      },
      {
        "objectCd": "STIV",
        "objectDsc": "ST IVES"
      },
      {
        "objectCd": "SCIS",
        "objectDsc": "STACKHOUSE ISLAND"
      },
      {
        "objectCd": "STEM",
        "objectDsc": "STEIN MOUNTAIN"
      },
      {
        "objectCd": "STEL",
        "objectDsc": "STELLAKO"
      },
      {
        "objectCd": "STPI",
        "objectDsc": "STEPHENS ISLAND"
      },
      {
        "objectCd": "STEW",
        "objectDsc": "STEWART"
      },
      {
        "objectCd": "STIK",
        "objectDsc": "STIKINE"
      },
      {
        "objectCd": "STIR",
        "objectDsc": "STONE IR 1A"
      },
      {
        "objectCd": "SMTP",
        "objectDsc": "STONE MOUNTAIN PARK"
      },
      {
        "objectCd": "STON",
        "objectDsc": "STONER"
      },
      {
        "objectCd": "SAIK",
        "objectDsc": "STONY CREEK SAIK'UZ IR"
      },
      {
        "objectCd": "STRI",
        "objectDsc": "STRANGE ISLAND"
      },
      {
        "objectCd": "STPK",
        "objectDsc": "STRATHCONA PARK"
      },
      {
        "objectCd": "STRA",
        "objectDsc": "STRATHNAVER"
      },
      {
        "objectCd": "SUIS",
        "objectDsc": "STUART ISLAND"
      },
      {
        "objectCd": "STUI",
        "objectDsc": "STUIE"
      },
      {
        "objectCd": "STUL",
        "objectDsc": "STUMP LAKE"
      },
      {
        "objectCd": "SUVY",
        "objectDsc": "SUKUNKA VALLEY"
      },
      {
        "objectCd": "SLBY",
        "objectDsc": "SULLIVAN BAY"
      },
      {
        "objectCd": "SMLD",
        "objectDsc": "SUMMERLAND"
      },
      {
        "objectCd": "SULK",
        "objectDsc": "SUMMIT LAKE"
      },
      {
        "objectCd": "SUPK",
        "objectDsc": "SUN PEAKS"
      },
      {
        "objectCd": "SUNL",
        "objectDsc": "SUNDANCE LAKES"
      },
      {
        "objectCd": "SRVY",
        "objectDsc": "SUNRISE VALLEY"
      },
      {
        "objectCd": "SSPR",
        "objectDsc": "SUNSET PRAIRIE"
      },
      {
        "objectCd": "9SNC",
        "objectDsc": "SUNSHINE COAST"
      },
      {
        "objectCd": "SHVL",
        "objectDsc": "SUNSHINE VALLEY"
      },
      {
        "objectCd": "SNSV",
        "objectDsc": "SUNSHINE VALLEY TNRD"
      },
      {
        "objectCd": "SRY",
        "objectDsc": "SURREY"
      },
      {
        "objectCd": "SUSI",
        "objectDsc": "SUSAN ISLAND"
      },
      {
        "objectCd": "SUSK",
        "objectDsc": "SUSKWA"
      },
      {
        "objectCd": "SWIS",
        "objectDsc": "SWANSON ISLAND"
      },
      {
        "objectCd": "SWRV",
        "objectDsc": "SWIFT RIVER"
      },
      {
        "objectCd": "SEIS",
        "objectDsc": "SWINDLE ISLAND"
      },
      {
        "objectCd": "TTCK",
        "objectDsc": "TA TA CREEK"
      },
      {
        "objectCd": "TACH",
        "objectDsc": "TACHIE"
      },
      {
        "objectCd": "TGHM",
        "objectDsc": "TAGHUM"
      },
      {
        "objectCd": "THAT",
        "objectDsc": "TAHLTAN"
      },
      {
        "objectCd": "THSS",
        "objectDsc": "TAHSIS"
      },
      {
        "objectCd": "THRV",
        "objectDsc": "TAHSISH RIVER"
      },
      {
        "objectCd": "TKLK",
        "objectDsc": "TAKLA LANDING"
      },
      {
        "objectCd": "TAKU",
        "objectDsc": "TAKU"
      },
      {
        "objectCd": "TYLK",
        "objectDsc": "TAKYSIE LAKE"
      },
      {
        "objectCd": "TKIS",
        "objectDsc": "TALUNKWAN ISLAND"
      },
      {
        "objectCd": "TNIS",
        "objectDsc": "TANU ISLAND"
      },
      {
        "objectCd": "TAPP",
        "objectDsc": "TAPPEN"
      },
      {
        "objectCd": "TRRS",
        "objectDsc": "TARRYS"
      },
      {
        "objectCd": "TATA",
        "objectDsc": "TATALROSE"
      },
      {
        "objectCd": "TLLK",
        "objectDsc": "TATLA LAKE"
      },
      {
        "objectCd": "TTLK",
        "objectDsc": "TATLATUI LAKE"
      },
      {
        "objectCd": "TYKL",
        "objectDsc": "TATLAYOKO LAKE"
      },
      {
        "objectCd": "TATS",
        "objectDsc": "TATSHENSHINI"
      },
      {
        "objectCd": "TAYL",
        "objectDsc": "TAYLOR"
      },
      {
        "objectCd": "TCLK",
        "objectDsc": "TCHESINKUT LAKE"
      },
      {
        "objectCd": "TECV",
        "objectDsc": "TELEGRAPH COVE"
      },
      {
        "objectCd": "TECK",
        "objectDsc": "TELEGRAPH CREEK"
      },
      {
        "objectCd": "TLWA",
        "objectDsc": "TELKWA"
      },
      {
        "objectCd": "TERR",
        "objectDsc": "TERRACE"
      },
      {
        "objectCd": "TESL",
        "objectDsc": "TESLIN"
      },
      {
        "objectCd": "TJCH",
        "objectDsc": "TETE JAUNE CACHE"
      },
      {
        "objectCd": "TTRV",
        "objectDsc": "TETSA RIVER"
      },
      {
        "objectCd": "TXIS",
        "objectDsc": "TEXADA ISLAND"
      },
      {
        "objectCd": "TSIS",
        "objectDsc": "THETIS ISLAND"
      },
      {
        "objectCd": "THNH",
        "objectDsc": "THORNHILL"
      },
      {
        "objectCd": "THVY",
        "objectDsc": "THREE VALLEY"
      },
      {
        "objectCd": "THUM",
        "objectDsc": "THRUMS"
      },
      {
        "objectCd": "THIS",
        "objectDsc": "THURLOW ISLANDS"
      },
      {
        "objectCd": "TNTG",
        "objectDsc": "TINTAGEL"
      },
      {
        "objectCd": "TLEL",
        "objectDsc": "TLELL"
      },
      {
        "objectCd": "TDRV",
        "objectDsc": "TOAD RIVER"
      },
      {
        "objectCd": "TOBA",
        "objectDsc": "TOBA INLET"
      },
      {
        "objectCd": "TOBI",
        "objectDsc": "TOBIANO"
      },
      {
        "objectCd": "TFNO",
        "objectDsc": "TOFINO"
      },
      {
        "objectCd": "TOLK",
        "objectDsc": "TOMSLAKE"
      },
      {
        "objectCd": "TOPL",
        "objectDsc": "TOPLEY"
      },
      {
        "objectCd": "TOLG",
        "objectDsc": "TOPLEY LANDING"
      },
      {
        "objectCd": "TRIS",
        "objectDsc": "TRACEY ISLAND"
      },
      {
        "objectCd": "TRAL",
        "objectDsc": "TRAIL"
      },
      {
        "objectCd": "TRAP",
        "objectDsc": "TRAPP LAKE"
      },
      {
        "objectCd": "TRLK",
        "objectDsc": "TROUT LAKE"
      },
      {
        "objectCd": "TRUT",
        "objectDsc": "TRUTCH"
      },
      {
        "objectCd": "TCIS",
        "objectDsc": "TRUTCH ISLAND"
      },
      {
        "objectCd": "TSAY",
        "objectDsc": "TSAY KEH DENE"
      },
      {
        "objectCd": "TIIR",
        "objectDsc": "TUGWELL ISLAND IR"
      },
      {
        "objectCd": "TLMN",
        "objectDsc": "TULAMEEN"
      },
      {
        "objectCd": "TMRG",
        "objectDsc": "TUMBLER RIDGE"
      },
      {
        "objectCd": "TUNK",
        "objectDsc": "TUNKWA LAKE"
      },
      {
        "objectCd": "TUPR",
        "objectDsc": "TUPPER"
      },
      {
        "objectCd": "TRNI",
        "objectDsc": "TURNOUR ISLAND"
      },
      {
        "objectCd": "TRTV",
        "objectDsc": "TURTLE VALLEY"
      },
      {
        "objectCd": "TWPS",
        "objectDsc": "TWEEDSMUIR PARK SOUTH"
      },
      {
        "objectCd": "TWPP",
        "objectDsc": "TWEEDSMUIR PROVINCIAL PARK"
      },
      {
        "objectCd": "TWOM",
        "objectDsc": "TWO MILE"
      },
      {
        "objectCd": "TWRV",
        "objectDsc": "TWO RIVERS"
      },
      {
        "objectCd": "TYE",
        "objectDsc": "TYE"
      },
      {
        "objectCd": "TZIS",
        "objectDsc": "TZARTUS ISLAND"
      },
      {
        "objectCd": "UBC",
        "objectDsc": "VANCOUVER (UBC)"
      },
      {
        "objectCd": "UCLT",
        "objectDsc": "UCLUELET"
      },
      {
        "objectCd": "UNBA",
        "objectDsc": "UNION BAY"
      },
      {
        "objectCd": "UNIS",
        "objectDsc": "UNION ISLAND"
      },
      {
        "objectCd": "UPCK",
        "objectDsc": "UPPER CUTBANK"
      },
      {
        "objectCd": "UPFR",
        "objectDsc": "UPPER FRASER"
      },
      {
        "objectCd": "UPSK",
        "objectDsc": "UPPER SKEENA"
      },
      {
        "objectCd": "VLIS",
        "objectDsc": "VALDES ISLAND"
      },
      {
        "objectCd": "VLMT",
        "objectDsc": "VALEMOUNT"
      },
      {
        "objectCd": "VMRU",
        "objectDsc": "VALEMOUNT RURAL"
      },
      {
        "objectCd": "VLCN",
        "objectDsc": "VALLICAN"
      },
      {
        "objectCd": "VNDA",
        "objectDsc": "VAN ANDA"
      },
      {
        "objectCd": "VAN",
        "objectDsc": "VANCOUVER"
      },
      {
        "objectCd": "VNHF",
        "objectDsc": "VANDERHOOF"
      },
      {
        "objectCd": "VGIS",
        "objectDsc": "VARGAS ISLAND"
      },
      {
        "objectCd": "VNBY",
        "objectDsc": "VAVENBY"
      },
      {
        "objectCd": "VEVV",
        "objectDsc": "VENABLES VALLEY"
      },
      {
        "objectCd": "VERN",
        "objectDsc": "VERNON"
      },
      {
        "objectCd": "VCTA",
        "objectDsc": "VICTORIA"
      },
      {
        "objectCd": "VROY",
        "objectDsc": "VIEW ROYAL"
      },
      {
        "objectCd": "VLVI",
        "objectDsc": "VILLAVERDE ISLANDS"
      },
      {
        "objectCd": "VINS",
        "objectDsc": "VINSULLA"
      },
      {
        "objectCd": "VCIS",
        "objectDsc": "VISCOUNT ISLAND"
      },
      {
        "objectCd": "WLIS",
        "objectDsc": "WALES ISLAND"
      },
      {
        "objectCd": "WHCN",
        "objectDsc": "WALHACHIN"
      },
      {
        "objectCd": "WPRV",
        "objectDsc": "WAPITI RIVER"
      },
      {
        "objectCd": "WDNR",
        "objectDsc": "WARDNER"
      },
      {
        "objectCd": "WRFD",
        "objectDsc": "WARFIELD"
      },
      {
        "objectCd": "WASA",
        "objectDsc": "WASA"
      },
      {
        "objectCd": "WTLK",
        "objectDsc": "WATCH LAKE"
      },
      {
        "objectCd": "WHLK",
        "objectDsc": "WATHUS ISLAND"
      },
      {
        "objectCd": "WNLK",
        "objectDsc": "WATSON LAKE"
      },
      {
        "objectCd": "WELL",
        "objectDsc": "WELLS"
      },
      {
        "objectCd": "WLGP",
        "objectDsc": "WELLS GRAY PARK"
      },
      {
        "objectCd": "WCIS",
        "objectDsc": "WEST CRACROFT ISLAND"
      },
      {
        "objectCd": "WFRN",
        "objectDsc": "WEST FERNIE"
      },
      {
        "objectCd": "WKLN",
        "objectDsc": "WEST KELOWNA"
      },
      {
        "objectCd": "WLAK",
        "objectDsc": "WEST LAKE"
      },
      {
        "objectCd": "WVAN",
        "objectDsc": "WEST VANCOUVER"
      },
      {
        "objectCd": "WTBK",
        "objectDsc": "WESTBANK"
      },
      {
        "objectCd": "WTBR",
        "objectDsc": "WESTBRIDGE"
      },
      {
        "objectCd": "WSHM",
        "objectDsc": "WESTHOLME"
      },
      {
        "objectCd": "WTWD",
        "objectDsc": "WESTWOLD"
      },
      {
        "objectCd": "WLTN",
        "objectDsc": "WHALETOWN"
      },
      {
        "objectCd": "WHIS",
        "objectDsc": "WHISTLER"
      },
      {
        "objectCd": "WELK",
        "objectDsc": "WHITE LAKE"
      },
      {
        "objectCd": "WHRV",
        "objectDsc": "WHITE RIVER"
      },
      {
        "objectCd": "WHTR",
        "objectDsc": "WHITE ROCK"
      },
      {
        "objectCd": "WYIS",
        "objectDsc": "WHITELEY ISLAND"
      },
      {
        "objectCd": "WCKI",
        "objectDsc": "WICKANINNISH ISLAND"
      },
      {
        "objectCd": "WIIS",
        "objectDsc": "WILLIAM ISLAND"
      },
      {
        "objectCd": "WLLK",
        "objectDsc": "WILLIAMS LAKE"
      },
      {
        "objectCd": "WIPT",
        "objectDsc": "WILLIS POINT"
      },
      {
        "objectCd": "WILK",
        "objectDsc": "WILLISTON LAKE"
      },
      {
        "objectCd": "WWFL",
        "objectDsc": "WILLOW FLATS"
      },
      {
        "objectCd": "WLRV",
        "objectDsc": "WILLOW RIVER"
      },
      {
        "objectCd": "WRVL",
        "objectDsc": "WILLOW RIVER VALLEY"
      },
      {
        "objectCd": "WLVY",
        "objectDsc": "WILLOW VALLEY"
      },
      {
        "objectCd": "WLMR",
        "objectDsc": "WILMER"
      },
      {
        "objectCd": "WLCK",
        "objectDsc": "WILSON CREEK"
      },
      {
        "objectCd": "WNDR",
        "objectDsc": "WINDERMERE"
      },
      {
        "objectCd": "WNLW",
        "objectDsc": "WINLAW"
      },
      {
        "objectCd": "WNHR",
        "objectDsc": "WINTER HARBOUR"
      },
      {
        "objectCd": "WIST",
        "objectDsc": "WISTARIA"
      },
      {
        "objectCd": "WITT",
        "objectDsc": "WITSET"
      },
      {
        "objectCd": "WONO",
        "objectDsc": "WONOWON"
      },
      {
        "objectCd": "WOOD",
        "objectDsc": "WOODPECKER"
      },
      {
        "objectCd": "WSLK",
        "objectDsc": "WOSS"
      },
      {
        "objectCd": "WYCF",
        "objectDsc": "WYCLIFFE"
      },
      {
        "objectCd": "WMDL",
        "objectDsc": "WYNNDEL"
      },
      {
        "objectCd": "WNDL",
        "objectDsc": "WYNNDEL"
      },
      {
        "objectCd": "YAHK",
        "objectDsc": "YAHK"
      },
      {
        "objectCd": "YALE",
        "objectDsc": "YALE"
      },
      {
        "objectCd": "YMIR",
        "objectDsc": "YMIR"
      },
      {
        "objectCd": "YOBO",
        "objectDsc": "YOUBOU"
      },
      {
        "objectCd": "YOYO",
        "objectDsc": "YOYO"
      },
      {
        "objectCd": "ZYIS",
        "objectDsc": "ZAYAS ISLAND"
      },
      {
        "objectCd": "ZBLS",
        "objectDsc": "ZEBALLOS"
      }
    ],
    countries: [
      {
        "objectCd": "AD",
        "objectDsc": "ANDORRA"
      },
      {
        "objectCd": "AE",
        "objectDsc": "UNITED ARAB EMIRATES"
      },
      {
        "objectCd": "AF",
        "objectDsc": "AFGHANISTAN"
      },
      {
        "objectCd": "AG",
        "objectDsc": "ANTIGUA AND BARBUDA"
      },
      {
        "objectCd": "AI",
        "objectDsc": "ANGUILLA"
      },
      {
        "objectCd": "AL",
        "objectDsc": "ALBANIA"
      },
      {
        "objectCd": "AM",
        "objectDsc": "ARMENIA"
      },
      {
        "objectCd": "AN",
        "objectDsc": "NETHERLANDS ANTILLES"
      },
      {
        "objectCd": "AO",
        "objectDsc": "ANGOLA"
      },
      {
        "objectCd": "AQ",
        "objectDsc": "ANTARCTICA"
      },
      {
        "objectCd": "AR",
        "objectDsc": "ARGENTINA"
      },
      {
        "objectCd": "AS",
        "objectDsc": "AMERICAN SAMOA"
      },
      {
        "objectCd": "AT",
        "objectDsc": "AUSTRIA"
      },
      {
        "objectCd": "AU",
        "objectDsc": "AUSTRALIA"
      },
      {
        "objectCd": "AW",
        "objectDsc": "ARUBA"
      },
      {
        "objectCd": "AZ",
        "objectDsc": "AZERBAIJAN"
      },
      {
        "objectCd": "BA",
        "objectDsc": "BOSNIA AND HERZEGOVINA"
      },
      {
        "objectCd": "BB",
        "objectDsc": "BARBADOS"
      },
      {
        "objectCd": "BD",
        "objectDsc": "BANGLADESH"
      },
      {
        "objectCd": "BE",
        "objectDsc": "BELGIUM"
      },
      {
        "objectCd": "BF",
        "objectDsc": "BURKINA FASO"
      },
      {
        "objectCd": "BG",
        "objectDsc": "BULGARIA"
      },
      {
        "objectCd": "BH",
        "objectDsc": "BAHRAIN"
      },
      {
        "objectCd": "BI",
        "objectDsc": "BURUNDI"
      },
      {
        "objectCd": "BJ",
        "objectDsc": "BENIN"
      },
      {
        "objectCd": "BM",
        "objectDsc": "BERMUDA"
      },
      {
        "objectCd": "BN",
        "objectDsc": "BRUNEI DARUSSALAM"
      },
      {
        "objectCd": "BO",
        "objectDsc": "BOLIVIA"
      },
      {
        "objectCd": "BR",
        "objectDsc": "BRAZIL"
      },
      {
        "objectCd": "BS",
        "objectDsc": "BAHAMAS"
      },
      {
        "objectCd": "BT",
        "objectDsc": "BHUTAN"
      },
      {
        "objectCd": "BV",
        "objectDsc": "BOUVET ISLAND"
      },
      {
        "objectCd": "BW",
        "objectDsc": "BOTSWANA"
      },
      {
        "objectCd": "BY",
        "objectDsc": "BELARUS"
      },
      {
        "objectCd": "BZ",
        "objectDsc": "BELIZE"
      },
      {
        "objectCd": "CA",
        "objectDsc": "CANADA"
      },
      {
        "objectCd": "CC",
        "objectDsc": "COCOS (KEELING) ISLANDS"
      },
      {
        "objectCd": "CF",
        "objectDsc": "CENTRAL AFRICAN REPUBLIC"
      },
      {
        "objectCd": "CG",
        "objectDsc": "CONGO"
      },
      {
        "objectCd": "CH",
        "objectDsc": "SWITZERLAND"
      },
      {
        "objectCd": "CI",
        "objectDsc": "COTE D'IVOIRE"
      },
      {
        "objectCd": "CK",
        "objectDsc": "COOK ISLANDS"
      },
      {
        "objectCd": "CL",
        "objectDsc": "CHILE"
      },
      {
        "objectCd": "CM",
        "objectDsc": "CAMEROON"
      },
      {
        "objectCd": "CN",
        "objectDsc": "CHINA"
      },
      {
        "objectCd": "CO",
        "objectDsc": "COLOMBIA"
      },
      {
        "objectCd": "CR",
        "objectDsc": "COSTA RICA"
      },
      {
        "objectCd": "CU",
        "objectDsc": "CUBA"
      },
      {
        "objectCd": "CV",
        "objectDsc": "CAPE VERDE"
      },
      {
        "objectCd": "CX",
        "objectDsc": "CHRISTMAS ISLAND"
      },
      {
        "objectCd": "CY",
        "objectDsc": "CYPRUS"
      },
      {
        "objectCd": "CZ",
        "objectDsc": "CZECH REPUBLIC"
      },
      {
        "objectCd": "DE",
        "objectDsc": "GERMANY"
      },
      {
        "objectCd": "DJ",
        "objectDsc": "DJIBOUTI"
      },
      {
        "objectCd": "DK",
        "objectDsc": "DENMARK"
      },
      {
        "objectCd": "DM",
        "objectDsc": "DOMINICA"
      },
      {
        "objectCd": "DO",
        "objectDsc": "DOMINICAN REPUBLIC"
      },
      {
        "objectCd": "DZ",
        "objectDsc": "ALGERIA"
      },
      {
        "objectCd": "EC",
        "objectDsc": "ECUADOR"
      },
      {
        "objectCd": "EE",
        "objectDsc": "ESTONIA"
      },
      {
        "objectCd": "EG",
        "objectDsc": "EGYPT"
      },
      {
        "objectCd": "EH",
        "objectDsc": "WESTERN SAHARA"
      },
      {
        "objectCd": "ER",
        "objectDsc": "ERITREA"
      },
      {
        "objectCd": "ES",
        "objectDsc": "SPAIN"
      },
      {
        "objectCd": "ET",
        "objectDsc": "ETHIOPIA"
      },
      {
        "objectCd": "FI",
        "objectDsc": "FINLAND"
      },
      {
        "objectCd": "FJ",
        "objectDsc": "FIJI"
      },
      {
        "objectCd": "FK",
        "objectDsc": "FALKLAND ISLANDS (MALVINAS)"
      },
      {
        "objectCd": "FM",
        "objectDsc": "MICRONESIA, FEDERATED STATES OF"
      },
      {
        "objectCd": "FO",
        "objectDsc": "FAROE ISLANDS"
      },
      {
        "objectCd": "FR",
        "objectDsc": "FRANCE"
      },
      {
        "objectCd": "GA",
        "objectDsc": "GABON"
      },
      {
        "objectCd": "GB",
        "objectDsc": "UNITED KINGDOM"
      },
      {
        "objectCd": "GD",
        "objectDsc": "GRENADA"
      },
      {
        "objectCd": "GE",
        "objectDsc": "GEORGIA"
      },
      {
        "objectCd": "GF",
        "objectDsc": "FRENCH GUIANA"
      },
      {
        "objectCd": "GH",
        "objectDsc": "GHANA"
      },
      {
        "objectCd": "GI",
        "objectDsc": "GIBRALTAR"
      },
      {
        "objectCd": "GL",
        "objectDsc": "GREENLAND"
      },
      {
        "objectCd": "GM",
        "objectDsc": "GAMBIA"
      },
      {
        "objectCd": "GN",
        "objectDsc": "GUINEA"
      },
      {
        "objectCd": "GP",
        "objectDsc": "GUADELOUPE"
      },
      {
        "objectCd": "GQ",
        "objectDsc": "EQUATORIAL GUINEA"
      },
      {
        "objectCd": "GR",
        "objectDsc": "GREECE"
      },
      {
        "objectCd": "GS",
        "objectDsc": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS"
      },
      {
        "objectCd": "GT",
        "objectDsc": "GUATEMALA"
      },
      {
        "objectCd": "GU",
        "objectDsc": "GUAM"
      },
      {
        "objectCd": "GW",
        "objectDsc": "GUINEA-BISSAU"
      },
      {
        "objectCd": "GY",
        "objectDsc": "GUYANA"
      },
      {
        "objectCd": "HK",
        "objectDsc": "HONG KONG"
      },
      {
        "objectCd": "HM",
        "objectDsc": "HEARD AND MCDONALD ISLANDS"
      },
      {
        "objectCd": "HN",
        "objectDsc": "HONDURAS"
      },
      {
        "objectCd": "HR",
        "objectDsc": "CROATIA (LOCAL NAME: HRVATSKA)"
      },
      {
        "objectCd": "HT",
        "objectDsc": "HAITI"
      },
      {
        "objectCd": "HU",
        "objectDsc": "HUNGARY"
      },
      {
        "objectCd": "ID",
        "objectDsc": "INDONESIA"
      },
      {
        "objectCd": "IE",
        "objectDsc": "IRELAND"
      },
      {
        "objectCd": "IL",
        "objectDsc": "ISRAEL"
      },
      {
        "objectCd": "IN",
        "objectDsc": "INDIA"
      },
      {
        "objectCd": "IO",
        "objectDsc": "BRITISH INDIAN OCEAN TERRITORY"
      },
      {
        "objectCd": "IQ",
        "objectDsc": "IRAQ"
      },
      {
        "objectCd": "IR",
        "objectDsc": "IRAN (ISLAMIC REPUBLIC OF)"
      },
      {
        "objectCd": "IS",
        "objectDsc": "ICELAND"
      },
      {
        "objectCd": "IT",
        "objectDsc": "ITALY"
      },
      {
        "objectCd": "JM",
        "objectDsc": "JAMAICA"
      },
      {
        "objectCd": "JO",
        "objectDsc": "JORDAN"
      },
      {
        "objectCd": "JP",
        "objectDsc": "JAPAN"
      },
      {
        "objectCd": "KE",
        "objectDsc": "KENYA"
      },
      {
        "objectCd": "KG",
        "objectDsc": "KYRGYZSTAN"
      },
      {
        "objectCd": "KH",
        "objectDsc": "CAMBODIA"
      },
      {
        "objectCd": "KI",
        "objectDsc": "KIRIBATI"
      },
      {
        "objectCd": "KM",
        "objectDsc": "COMOROS"
      },
      {
        "objectCd": "KN",
        "objectDsc": "SAINT KITTS AND NEVIS"
      },
      {
        "objectCd": "KP",
        "objectDsc": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF"
      },
      {
        "objectCd": "KR",
        "objectDsc": "KOREA, REPUBLIC OF"
      },
      {
        "objectCd": "KW",
        "objectDsc": "KUWAIT"
      },
      {
        "objectCd": "KY",
        "objectDsc": "CAYMAN ISLANDS"
      },
      {
        "objectCd": "KZ",
        "objectDsc": "KAZAKHSTAN"
      },
      {
        "objectCd": "LA",
        "objectDsc": "LAO PEOPLE'S DEMOCRATIC REPUBLIC"
      },
      {
        "objectCd": "LB",
        "objectDsc": "LEBANON"
      },
      {
        "objectCd": "LC",
        "objectDsc": "SAINT LUCIA"
      },
      {
        "objectCd": "LI",
        "objectDsc": "LIECHTENSTEIN"
      },
      {
        "objectCd": "LK",
        "objectDsc": "SRI LANKA"
      },
      {
        "objectCd": "LR",
        "objectDsc": "LIBERIA"
      },
      {
        "objectCd": "LS",
        "objectDsc": "LESOTHO"
      },
      {
        "objectCd": "LT",
        "objectDsc": "LITHUANIA"
      },
      {
        "objectCd": "LU",
        "objectDsc": "LUXEMBOURGE"
      },
      {
        "objectCd": "LV",
        "objectDsc": "LATVIA"
      },
      {
        "objectCd": "LY",
        "objectDsc": "LIBYAN ARAB JAMAHIRIYA"
      },
      {
        "objectCd": "MA",
        "objectDsc": "MOROCCO"
      },
      {
        "objectCd": "MC",
        "objectDsc": "MONACO"
      },
      {
        "objectCd": "MD",
        "objectDsc": "MOLDOVA, REPUBLIC OF"
      },
      {
        "objectCd": "MG",
        "objectDsc": "MADAGASCAR"
      },
      {
        "objectCd": "MH",
        "objectDsc": "MARSHALL ISLANDS"
      },
      {
        "objectCd": "MK",
        "objectDsc": "MACEDONIA, THE FORMER YUGOSLAVIA REPUBLIC OF"
      },
      {
        "objectCd": "ML",
        "objectDsc": "MALI"
      },
      {
        "objectCd": "MM",
        "objectDsc": "MYANMAR"
      },
      {
        "objectCd": "MN",
        "objectDsc": "MONGOLIA"
      },
      {
        "objectCd": "MO",
        "objectDsc": "MACAU"
      },
      {
        "objectCd": "MP",
        "objectDsc": "NORTHERN MARIANA ISLANDS"
      },
      {
        "objectCd": "MQ",
        "objectDsc": "MARTINIQUE"
      },
      {
        "objectCd": "MR",
        "objectDsc": "MAURITANIA"
      },
      {
        "objectCd": "MS",
        "objectDsc": "MONTSERRAT"
      },
      {
        "objectCd": "MT",
        "objectDsc": "MALTA"
      },
      {
        "objectCd": "MU",
        "objectDsc": "MAURITIUS"
      },
      {
        "objectCd": "MV",
        "objectDsc": "MALDIVES"
      },
      {
        "objectCd": "MW",
        "objectDsc": "MALAWI"
      },
      {
        "objectCd": "MX",
        "objectDsc": "MEXICO"
      },
      {
        "objectCd": "MY",
        "objectDsc": "MALAYSIA"
      },
      {
        "objectCd": "MZ",
        "objectDsc": "MOZAMBIQUE"
      },
      {
        "objectCd": "NA",
        "objectDsc": "NAMIBIA"
      },
      {
        "objectCd": "NC",
        "objectDsc": "NEW CALEDONIA"
      },
      {
        "objectCd": "NE",
        "objectDsc": "NIGER"
      },
      {
        "objectCd": "NF",
        "objectDsc": "NORFOLK ISLAND"
      },
      {
        "objectCd": "NG",
        "objectDsc": "NIGERIA"
      },
      {
        "objectCd": "NI",
        "objectDsc": "NICARAGUA"
      },
      {
        "objectCd": "NL",
        "objectDsc": "NETHERLANDS"
      },
      {
        "objectCd": "NO",
        "objectDsc": "NORWAY"
      },
      {
        "objectCd": "NP",
        "objectDsc": "NEPAL"
      },
      {
        "objectCd": "NR",
        "objectDsc": "NAURU"
      },
      {
        "objectCd": "NU",
        "objectDsc": "NIUE"
      },
      {
        "objectCd": "NZ",
        "objectDsc": "NEW ZEALAND"
      },
      {
        "objectCd": "OM",
        "objectDsc": "OMAN"
      },
      {
        "objectCd": "PA",
        "objectDsc": "PANAMA"
      },
      {
        "objectCd": "PE",
        "objectDsc": "PERU"
      },
      {
        "objectCd": "PF",
        "objectDsc": "FRENCH POLYNESIA"
      },
      {
        "objectCd": "PG",
        "objectDsc": "PAPUA NEW GUINEA"
      },
      {
        "objectCd": "PH",
        "objectDsc": "PHILIPPINES"
      },
      {
        "objectCd": "PK",
        "objectDsc": "PAKISTAN"
      },
      {
        "objectCd": "PL",
        "objectDsc": "POLAND"
      },
      {
        "objectCd": "PM",
        "objectDsc": "ST. PIERRE AND MIQUELON"
      },
      {
        "objectCd": "PN",
        "objectDsc": "PITCAIRN"
      },
      {
        "objectCd": "PR",
        "objectDsc": "PUERTO RICO"
      },
      {
        "objectCd": "PT",
        "objectDsc": "PORTUGAL"
      },
      {
        "objectCd": "PW",
        "objectDsc": "PALAU"
      },
      {
        "objectCd": "PY",
        "objectDsc": "PARAGUAY"
      },
      {
        "objectCd": "QA",
        "objectDsc": "QATAR"
      },
      {
        "objectCd": "RE",
        "objectDsc": "REUNION"
      },
      {
        "objectCd": "RO",
        "objectDsc": "ROMANIA"
      },
      {
        "objectCd": "RU",
        "objectDsc": "RUSSIAN FEDERATION"
      },
      {
        "objectCd": "RW",
        "objectDsc": "RWANDA"
      },
      {
        "objectCd": "SA",
        "objectDsc": "SAUDI ARABIA"
      },
      {
        "objectCd": "SB",
        "objectDsc": "SOLOMON ISLANDS"
      },
      {
        "objectCd": "SC",
        "objectDsc": "SEYCHELLES"
      },
      {
        "objectCd": "SD",
        "objectDsc": "SUDAN"
      },
      {
        "objectCd": "SE",
        "objectDsc": "SWEDEN"
      },
      {
        "objectCd": "SG",
        "objectDsc": "SINGAPORE"
      },
      {
        "objectCd": "SH",
        "objectDsc": "ST. HELENA"
      },
      {
        "objectCd": "SI",
        "objectDsc": "SLOVENIA"
      },
      {
        "objectCd": "SJ",
        "objectDsc": "SVALBARD AND JAN MAYEN ISLANDS"
      },
      {
        "objectCd": "SK",
        "objectDsc": "SLOVAKIA (SLOVAK REPUBLIC)"
      },
      {
        "objectCd": "SL",
        "objectDsc": "SIERRA LEONE"
      },
      {
        "objectCd": "SM",
        "objectDsc": "SAN MARINO"
      },
      {
        "objectCd": "SN",
        "objectDsc": "SENEGAL"
      },
      {
        "objectCd": "SO",
        "objectDsc": "SOMALIA"
      },
      {
        "objectCd": "SR",
        "objectDsc": "SURINAME"
      },
      {
        "objectCd": "ST",
        "objectDsc": "SAO TOME AND PRINCIPE"
      },
      {
        "objectCd": "SV",
        "objectDsc": "EL SALVADOR"
      },
      {
        "objectCd": "SY",
        "objectDsc": "SYRIAN ARAB REPUBLIC"
      },
      {
        "objectCd": "SZ",
        "objectDsc": "SWAZILAND"
      },
      {
        "objectCd": "TC",
        "objectDsc": "TURKS AND CAICOS ISLANDS"
      },
      {
        "objectCd": "TD",
        "objectDsc": "CHAD"
      },
      {
        "objectCd": "TF",
        "objectDsc": "FRENCH SOUTHERN TERRITORIES"
      },
      {
        "objectCd": "TG",
        "objectDsc": "TOGO"
      },
      {
        "objectCd": "TH",
        "objectDsc": "THAILAND"
      },
      {
        "objectCd": "TJ",
        "objectDsc": "TAJIKISTAN"
      },
      {
        "objectCd": "TK",
        "objectDsc": "TOKELAU"
      },
      {
        "objectCd": "TM",
        "objectDsc": "TURKMENISTAN"
      },
      {
        "objectCd": "TN",
        "objectDsc": "TUNISIA"
      },
      {
        "objectCd": "TO",
        "objectDsc": "TONGA"
      },
      {
        "objectCd": "TP",
        "objectDsc": "EAST TIMOR"
      },
      {
        "objectCd": "TR",
        "objectDsc": "TURKEY"
      },
      {
        "objectCd": "TT",
        "objectDsc": "TRINIDAD AND TOBAGO"
      },
      {
        "objectCd": "TV",
        "objectDsc": "TUVALU"
      },
      {
        "objectCd": "TW",
        "objectDsc": "TAIWAN, PROVINCE OF CHINA"
      },
      {
        "objectCd": "TZ",
        "objectDsc": "TANZANIA, UNITED REPUBLIC OF"
      },
      {
        "objectCd": "UA",
        "objectDsc": "UKRAINE"
      },
      {
        "objectCd": "UG",
        "objectDsc": "UGANDA"
      },
      {
        "objectCd": "UM",
        "objectDsc": "UNITED STATES MINOR OUTLYING ISLANDS"
      },
      {
        "objectCd": "US",
        "objectDsc": "UNITED STATES"
      },
      {
        "objectCd": "UY",
        "objectDsc": "URUGUAY"
      },
      {
        "objectCd": "UZ",
        "objectDsc": "UZBEKISTAN"
      },
      {
        "objectCd": "VA",
        "objectDsc": "VATICAN CITY STATE (HOLY SEE)"
      },
      {
        "objectCd": "VC",
        "objectDsc": "SAINT VINCENT AND THE GRENADINES"
      },
      {
        "objectCd": "VE",
        "objectDsc": "VENEZUELA"
      },
      {
        "objectCd": "VG",
        "objectDsc": "VIRGIN ISLANDS (BRITISH)"
      },
      {
        "objectCd": "VI",
        "objectDsc": "VIRGIN ISLANDS (U.S.)"
      },
      {
        "objectCd": "VN",
        "objectDsc": "VIET NAM"
      },
      {
        "objectCd": "VU",
        "objectDsc": "VANUATU"
      },
      {
        "objectCd": "WF",
        "objectDsc": "WALLIS AND FUTUNA ISLANDS"
      },
      {
        "objectCd": "WS",
        "objectDsc": "SAMOA"
      },
      {
        "objectCd": "YE",
        "objectDsc": "YEMEN"
      },
      {
        "objectCd": "YT",
        "objectDsc": "MAYOTTE"
      },
      {
        "objectCd": "YU",
        "objectDsc": "YUGOSLAVIA"
      },
      {
        "objectCd": "ZA",
        "objectDsc": "SOUTH AFRICA"
      },
      {
        "objectCd": "ZM",
        "objectDsc": "ZAMBIA"
      },
      {
        "objectCd": "ZR",
        "objectDsc": "ZAIRE"
      },
      {
        "objectCd": "ZW",
        "objectDsc": "ZIMBABWE"
      }
    ],
    configuration: {
      environment: 'prod'
    },
    currently_editing_form_object: {
      "form_type": null,
      "form_id": null
    },
    forms: {
      "IRP": {},
      "24Hour": {},
      "12Hour": {},
      "VI": {}
    },
    form_schemas: {
      forms: {
        "12Hour": {
          "component": "TwelveHourProhibition",
          "form_type": "12Hour",
          "label": "12-Hour",
          "description": "12-Hour Driving Suspension",
          "full_name": "MV2906",
          "documents": {
            "all": {
              "name": "Print All Copies",
              "reprint": true,
              "variants": ['icbc', 'driver', 'police']
            }
          },
          "disabled": false,
          "check_digit": false
        },
        "24Hour": {
          "component": "TwentyFourHourProhibition",
          "form_type": "24Hour",
          "label": "24-Hour",
          "description": "24-Hour Prohibition",
          "full_name": "MV2634",
          "documents": {
            "all": {
              "name": "Print All Copies",
              "reprint": true,
              "variants": ['icbc', 'driver', 'ilo', 'police']
            }
          },
          "disabled": false,
          "check_digit": false
        },
        "VI": {
          "component": "VehicleImpoundment",
          "form_type": "VI",
          "label": "VI",
          "description": "Vehicle Impoundment",
          "full_name": "MV2721 & MV2722",
          "documents": {
            "all": {
              "name": "Print All Copies",
              "reprint": true,
              "variants": ['driver', 'police', 'ilo', 'report']
            }
          },
          "disabled": false,
          "check_digit": true
        },
        "IRP": {
          "component": "ImmediateRoadsideProhibition",
          "form_type": "IRP",
          "label": "IRP",
          "description": "Immediate Roadside Prohibition",
          "full_name": "MV2723",
          "documents": {},
          "disabled": true,
          "check_digit": true
        }
      }
    },
    icbc_vehicle_lookup: [],
    impound_lot_operators: [
      {
        "id": "957C73BB-3D24-35BF-8040-B1706C328F6A",
        "name": "24 Hour Towing",
        "lot_address": "728 Payne Street, Creston",
        "city": "Creston",
        "phone": "250-428-2323"
      },
      {
        "id": "1ADF3826-753F-23A5-982C-BFBB21787595",
        "name": "5 Star Towing Inc",
        "lot_address": "733 2nd Avenue",
        "city": "Prince George",
        "phone": "250-614-9393"
      },
      {
        "id": "B1A811D7-578E-4FF8-2AEB-8FDE09FC7E9C",
        "name": "A J Towing Inc",
        "lot_address": "8945 Nowell Street",
        "city": "Chilliwack",
        "phone": "604-795-337447"
      },
      {
        "id": "FE2B1FAE-1D69-18BA-9E62-2A48C42D3BE3",
        "name": "A&M Towing",
        "lot_address": "305 Moore Avenue",
        "city": "100 Mile House",
        "phone": "250-395-4334"
      },
      {
        "id": "97EE2F66-4B2C-05AA-291D-3C2A1EA18402",
        "name": "Able Towing",
        "lot_address": "2384 210 Road",
        "city": "Dawson Creek",
        "phone": "250-782-4239"
      },
      {
        "id": "8FC8649B-0171-1355-0964-21132D9B0575",
        "name": "Aggressive Auto Towing Ltd",
        "lot_address": "34523 2nd Avenue",
        "city": "Abbotsford",
        "phone": "604-854-5669"
      },
      {
        "id": "E859891E-09B1-473A-6D8A-17ECF3A39751",
        "name": "Alberni Towing Ltd",
        "lot_address": "2490 Timberlane Road",
        "city": "Port Alberni",
        "phone": "250-724-4050"
      },
      {
        "id": "4E5F3AF6-5258-4D29-9BC6-6B3C323D4F02",
        "name": "All Coast Towing Services",
        "lot_address": "1178 Stewart Road",
        "city": "Gibsons",
        "phone": "604-886-7280"
      },
      {
        "id": "166A9C00-98B7-53C6-338E-7BBD5C6D804C",
        "name": "All-Ways Towing",
        "lot_address": "647B Dupplin Road",
        "city": "All-Ways Towing",
        "phone": "250-381-0110"
      },
      {
        "id": "40EBA6C2-A6FD-288A-509B-0036E3E59C4E",
        "name": "Antle Towing Ltd",
        "lot_address": "802 Exeter Road",
        "city": "Lac La Hache",
        "phone": "250-396-7306"
      },
      {
        "id": "2F757448-0D15-8162-832A-4A50126036F4",
        "name": "Applewood Autobody Towing & Glass",
        "lot_address": "4800 Byng Road",
        "city": "Port Hardy",
        "phone": "250-949-1900"
      },
      {
        "id": "E5993B2A-64CF-27BF-4FB1-0053BF215DDF",
        "name": "Archies's Towing & Autowrecking Ltd",
        "lot_address": "7496 Old Alaska highway",
        "city": "Fort Nelson",
        "phone": "250-774-3054"
      },
      {
        "id": "9A1F8DF8-0783-8245-9C22-2DD0840A8D69",
        "name": "Arrowsmith Auto & Tow Ltd",
        "lot_address": "253 East Fern Road",
        "city": "Parksville",
        "phone": "250-752-1662"
      },
      {
        "id": "D4B28D5E-6813-41C7-60DF-55A1BA95876D",
        "name": "Aurora Truck Centre Ltd",
        "lot_address": "2206 Nadina Avenue",
        "city": "Houston",
        "phone": "250-845-7600"
      },
      {
        "id": "C5B98114-6D63-2DCB-07DF-5D5D2C0E65EE",
        "name": "Autow",
        "lot_address": "402 Juniper Road",
        "city": "Quesnel",
        "phone": "250-992-9128"
      },
      {
        "id": "5378274B-3334-5FA1-88DF-111A6850466B",
        "name": "Baillie's Towing & Auto Body Repairs",
        "lot_address": "4833 Gilbert Drive",
        "city": "Barriere",
        "phone": "250-672-9529"
      },
      {
        "id": "ED0BCD0F-94A5-3ABA-3A8E-B5C9077691E3",
        "name": "Barriere Auto and Truck Tow",
        "lot_address": "4403 Airfield Road",
        "city": "Barriere",
        "phone": "250-319-7767"
      },
      {
        "id": "D47F1206-176C-9FC2-4B7D-0F9CD4961464",
        "name": "Bayview Auto Towing (2000) Ltd",
        "lot_address": "201 155 176 Street",
        "city": "Surrey",
        "phone": "604-538-2032"
      },
      {
        "id": "AABCA77F-666F-7F41-8E47-9BD267150CC6",
        "name": "Bee Jay Autowrecking & Towing",
        "lot_address": "765 N MacKenzie Ave",
        "city": "Williams Lake",
        "phone": "250-398-8311"
      },
      {
        "id": "4307EABE-89CB-7BC5-51F6-08FE4B6E6AD6",
        "name": "Ben's Towing & Autowrecking Ltd",
        "lot_address": "230 42nd Street SW",
        "city": "Salmon Arm",
        "phone": "250-832-6512"
      },
      {
        "id": "1BBC81DD-116A-3063-6DE5-E9BF1A13544C",
        "name": "BKV Enterprises Ltd",
        "lot_address": "13200 Bartlett Road",
        "city": "Burns Lake",
        "phone": "250-692-3413"
      },
      {
        "id": "554492AE-5A57-5140-42A7-ED0E9E032CF1",
        "name": "Blackbear Towing",
        "lot_address": "1080 Industrial Way",
        "city": "Parksville",
        "phone": "250-954-9096"
      },
      {
        "id": "C7B80EA6-3FA9-1F2D-56EB-312BE5AB6C55",
        "name": "Boyce Auto Towing Ltd",
        "lot_address": "15700 River Road",
        "city": "Richmond",
        "phone": "604-278-1106"
      },
      {
        "id": "50D20468-3A0E-4418-7D6C-596D69560628",
        "name": "Bridge Lake Towing",
        "lot_address": "310 Moore Avenue",
        "city": "100 Mile House",
        "phone": "250-593-4056"
      },
      {
        "id": "11B5D259-85CD-604D-5A43-70D5806A1518",
        "name": "Buster's Towing Ltd",
        "lot_address": "435 Industrial Avenue",
        "city": "Vancouver",
        "phone": "604-685-7246"
      },
      {
        "id": "F33DDB48-37B1-63BE-20ED-BAEEFB888273",
        "name": "C.A Towing",
        "lot_address": "13525 Sunshine Coast Hwy",
        "city": "Medeira Park",
        "phone": "604-740-1900"
      },
      {
        "id": "50491011-414B-4F77-381D-8255CBEE995B",
        "name": "Capital Towing Services Ltd",
        "lot_address": "905 Centennial Avneue",
        "city": "Whitehorse",
        "phone": "867-667-2403"
      },
      {
        "id": "A6B0A3AB-A63B-81CB-84E1-D689FF83225B",
        "name": "Care Towing (1991) Ltd",
        "lot_address": "4505 23 Street",
        "city": "Vernon",
        "phone": "250-542-0207"
      },
      {
        "id": "C90D9216-4B3F-0C4B-8E05-4624BD7A999B",
        "name": "Cariboo Towing",
        "lot_address": "750 S Mackenzie Avenue",
        "city": "Williams Lake",
        "phone": "250-392-2888"
      },
      {
        "id": "F4500B3D-5CE6-4799-7E3C-7C24AF1C5164",
        "name": "Caribou Service",
        "lot_address": "5549 Burton Frontage Road",
        "city": "Burton",
        "phone": "250-265-3191"
      },
      {
        "id": "49ED412A-57A3-037B-8797-2A2B3C3578DD",
        "name": "Central Towing",
        "lot_address": "6 - 140 10th Street",
        "city": "Ladysmith",
        "phone": "250-753-6912"
      },
      {
        "id": "A47E0286-2126-409B-52E2-D878CB9B0F86",
        "name": "Chanor Truck & Auto Repair Ltd",
        "lot_address": "1371 Quartz Road",
        "city": "Cache Creek",
        "phone": "250-457-6753"
      },
      {
        "id": "F7A20CCB-1069-210E-51B1-7DDC22B59AC6",
        "name": "Charlotte Tire Ltd",
        "lot_address": "605 Ocean View Drive",
        "city": "Queen Charlotte Island",
        "phone": "250-559-4641"
      },
      {
        "id": "5C0AAD30-2D09-3ECB-6008-5A6143F9822E",
        "name": "Chesney Towing",
        "lot_address": "8646 Gaudet Road",
        "city": "Powell River",
        "phone": "604-413-1457"
      },
      {
        "id": "925D38B3-9169-2A86-46F6-31C3DA7041B0",
        "name": "Christina Lake Towing",
        "lot_address": "1648 Maida Frontage Road",
        "city": "Christina Lake",
        "phone": "250-442-9477"
      },
      {
        "id": "BCDE91D5-585F-A419-8BA8-F54D74C5308B",
        "name": "City Motors (1981) Ltd",
        "lot_address": "5951 Arbutus Avenue",
        "city": "Powell River",
        "phone": "604-483-3210"
      },
      {
        "id": "50707DC6-01E3-3F19-2CF8-6C486F0163B0",
        "name": "Classic Towing (Golden)",
        "lot_address": "1025 11 Avenue N Golden",
        "city": "Golden",
        "phone": "250-344-6659"
      },
      {
        "id": "7F1162DF-6855-68FE-14AB-7D8C25CC6129",
        "name": "Classic Towing (Revelstoke)",
        "lot_address": "2100 Big Eddy Road",
        "city": "Revelstoke",
        "phone": "250-837-6216"
      },
      {
        "id": "5C7B0609-8A37-3FCD-967A-793D277B74A7",
        "name": "Clearwater Towing Ltd",
        "lot_address": "516 Swanson Street",
        "city": "Clearwater",
        "phone": "250-674-3123"
      },
      {
        "id": "3489C756-3B2D-90FE-2DC7-DE2D84AE880F",
        "name": "Clover Towing Ltd (Surrey)",
        "lot_address": "5340 192 Street",
        "city": "Surrey",
        "phone": "604-513-1900"
      },
      {
        "id": "80E80051-823D-49DE-36D9-8EBBE62E27AC",
        "name": "Club Towing & Heavy Recovery",
        "lot_address": "505 Industrial Road # 2 Invermere",
        "city": "Invermere",
        "phone": "250-342-9551"
      },
      {
        "id": "BF5860C5-34D8-059C-7B84-A0D3B7BE5C7E",
        "name": "Coastline Towing & Transport",
        "lot_address": "1893 Coulter Road",
        "city": "Campbell River",
        "phone": "250-923-8111"
      },
      {
        "id": "D6D1C97C-3B30-175D-3311-4A3F9FB21794",
        "name": "Cold Country Towing & Traffic Control Ltd (Kimberley)",
        "lot_address": "321 316 Avenue * Kimberly",
        "city": "Kimberly",
        "phone": "250-426-3680"
      },
      {
        "id": "1EB79CF5-015D-4D14-3E11-37BBBAA26AF1",
        "name": "Cold Country Towing & Traffic Control Ltd. (Cranbrook)",
        "lot_address": "3584 Collinson Road",
        "city": "Cranbrook",
        "phone": "250-426-3680"
      },
      {
        "id": "2E2629E5-8F58-9F6A-5B2A-E0B8FF8A0E9C",
        "name": "Collision Craft",
        "lot_address": "11129 115 Street",
        "city": "Osoyoos",
        "phone": "250-495-6331"
      },
      {
        "id": "7445D9EB-4D44-8495-49B7-30AAA9A147FA",
        "name": "Columbia Towing Ltd (Revelstoke)",
        "lot_address": "96 MacPherson Street",
        "city": "Revelstoke",
        "phone": "250-837-9391"
      },
      {
        "id": "E5A26EBF-8506-3CDA-366E-E6D782A79C6F",
        "name": "Columbia Towing Ltd (Sicamous)",
        "lot_address": "729 Frontage Road * Sicamous",
        "city": "Sicamous",
        "phone": "250-836-2000"
      },
      {
        "id": "D3AF6F2A-06B7-A48A-10F6-1BCC932C45D0",
        "name": "Comox Valley Dodge Towing & Recovery",
        "lot_address": "4847 Island Hwy N",
        "city": "Courtenay",
        "phone": "250-338-4665"
      },
      {
        "id": "750ADE37-2A0C-7AC5-35E4-330D2A6468DF",
        "name": "Comox Valley Towing & Recovery Ltd",
        "lot_address": "2270 Cousins Road",
        "city": "Courtenay",
        "phone": "250-338-4665"
      },
      {
        "id": "1D58E7C1-4FCC-0312-947E-2743168A1F87",
        "name": "Cooper's Towing Ltd",
        "lot_address": "1212 Alpha Lake Road",
        "city": "Whistler",
        "phone": "604-902-1930"
      },
      {
        "id": "182BDD0E-1339-69BB-5167-B78379FA176E",
        "name": "Coquitlam Towing & Storage Co Ltd",
        "lot_address": "1648 Industrial Avenue",
        "city": "Coquitlam",
        "phone": "604-939-6474"
      },
      {
        "id": "14221926-31A8-5188-5875-BBE0FA6C0E86",
        "name": "Unitow",
        "lot_address": "1717 Vernon Drive",
        "city": "Vancouver",
        "phone": "604-592-1234"
      },
      {
        "id": "22BA28A9-0D39-8DCE-A6A3-547328DA8F66",
        "name": "Dakota Towing",
        "lot_address": "1505 Hardy Street",
        "city": "Kelowna",
        "phone": "250-300-3999"
      },
      {
        "id": "75EEACE1-28DB-17EB-059B-186DA450460F",
        "name": "Day & Nite Towing & Autowrecking",
        "lot_address": "1933 Field Road",
        "city": "Sechelt",
        "phone": "604-885-0699"
      },
      {
        "id": "68494E06-1612-88EC-459A-8BF0EB1E37F6",
        "name": "Del Oro Mairo'sTowing Ltd",
        "lot_address": "2535 Juliann Road",
        "city": "Kelowna",
        "phone": "250-769-2100"
      },
      {
        "id": "18DB9B40-9CA5-4C38-8B8C-0EB3E1568335",
        "name": "Dollar Towing",
        "lot_address": "312 B Enterprise Avenue",
        "city": "Kitimat",
        "phone": "250-632-9947"
      },
      {
        "id": "1E70C52C-4138-8D83-3F56-4001177541CB",
        "name": "Don's Auto Towing Ltd",
        "lot_address": "671 Athabasca Street",
        "city": "Kamloops",
        "phone": "250-374-6281"
      },
      {
        "id": "1AE5640B-551C-45B1-9A84-A1CB15DD306D",
        "name": "Downtown Service & Towing Ltd",
        "lot_address": "750 Mackenzie Avenue  S",
        "city": "Williams Lake",
        "phone": "250-392-2888"
      },
      {
        "id": "787C9DCB-8CA1-7930-728E-A587E6DA6918",
        "name": "Drake Towing Ltd",
        "lot_address": "1553 Powell Street",
        "city": "Vancouver",
        "phone": "604-251-3344"
      },
      {
        "id": "7E257522-5801-001D-4915-0024624E1BE7",
        "name": "Dunn Right Towing & Recovery",
        "lot_address": "691 McPhee Avenue",
        "city": "Courtenay",
        "phone": "250-650-8697"
      },
      {
        "id": "8F72B2ED-2674-4163-0B37-3F4993EA3ACC",
        "name": "Dunnmore Towing & Recovery",
        "lot_address": "3447B Royston Road",
        "city": "Courtenay",
        "phone": "250-650-8224"
      },
      {
        "id": "39D877DE-6ED9-9C98-8CC3-DB55D3F4856C",
        "name": "Eagle Eye Marine Services",
        "lot_address": "178 Kings Lane",
        "city": "Salt Spring Island",
        "phone": "250-883-7865"
      },
      {
        "id": "D548E2EB-9725-6923-43D4-C6F5C085804B",
        "name": "Eagle Rock Towing (Armstrong)",
        "lot_address": "1645 Eagle Rock Road (Armstrong)",
        "city": "Armstrong",
        "phone": "250-546-8290"
      },
      {
        "id": "764C6E27-9DDC-26F1-14DE-34457234A097",
        "name": "Eagle Rock Towing (Salmon Arm)",
        "lot_address": "5270 Auto Road (Salmon Arm)",
        "city": "Armstrong",
        "phone": "250-804-4442"
      },
      {
        "id": "5B94BCD1-6EE5-3075-6E8E-1B449630533C",
        "name": "Eagle Rock Towing (Sicamous)",
        "lot_address": "901 Trans Canada Hwy Frontage (Sicamous)  Road",
        "city": "Armstrong",
        "phone": "250-836-0333"
      },
      {
        "id": "D9DCB9B8-3105-9227-4971-4D5D54475FCA",
        "name": "EFM Towing",
        "lot_address": "741 Industial Road 2",
        "city": "Cranbrook",
        "phone": "250-417-7334"
      },
      {
        "id": "EDC51CC2-7C8A-24D7-3CFE-AAC16D8A656E",
        "name": "Eisenkrien Services Ltd",
        "lot_address": "19535 Wonowon Extn Road",
        "city": "Wonowon",
        "phone": "250-263-8733"
      },
      {
        "id": "F78E766E-0650-877F-7EF9-82B40A3E339C",
        "name": "Encore Towing & Service",
        "lot_address": "38926 Production Way",
        "city": "Squamish",
        "phone": "604-892-5051"
      },
      {
        "id": "FEE20D51-6D6E-54F8-9C59-30F06152A797",
        "name": "Exceptional Towing & Recovery Ltd",
        "lot_address": "1529 99th Street",
        "city": "Dawson Creek",
        "phone": "250-782-4845"
      },
      {
        "id": "B0C3B134-0759-4483-6733-534545CC2574",
        "name": "Fernie Tow & Go Ltd",
        "lot_address": "1994 Hwy 3",
        "city": "Fernie",
        "phone": "250-423-7860"
      },
      {
        "id": "AB661E7D-0C1F-6C3E-01BB-57A4D60F8619",
        "name": "First Choice Towing (2007) Ltd",
        "lot_address": "10150 Alder Road",
        "city": "Fort St John",
        "phone": "250-785-2271"
      },
      {
        "id": "7B0AA0A1-6F27-4600-4FA6-E9FD058116CA",
        "name": "Fraser Canyon Towing Inc",
        "lot_address": "48150 Trans Canada Hwy",
        "city": "Boston Bar",
        "phone": "604-867-9113"
      },
      {
        "id": "DAE9EE13-62E1-A63C-856A-0C13B04D3990",
        "name": "Fraser Lake Towing",
        "lot_address": "13936 Highway 16 W, Endako",
        "city": "Fraser Lake",
        "phone": "250-699-6132"
      },
      {
        "id": "AE5320F8-4D7C-8D03-258A-5CBCD58011F7",
        "name": "Gammond Towing",
        "lot_address": "Lot 10 Langley Ave, Fraser lake, V0J1S0",
        "city": "Fort Fraser",
        "phone": "250-996-3377"
      },
      {
        "id": "4F82C0AD-25BA-89A3-4F27-4241A1A35A1F",
        "name": "Freightliner of Cranbrook Ltd",
        "lot_address": "301 Slater Road",
        "city": "Cranbrook",
        "phone": "250-489-8781"
      },
      {
        "id": "BEC3D9A9-8A03-359B-375E-27B348274E68",
        "name": "Garrick Automotive",
        "lot_address": "246 Alymer Road",
        "city": "Chase",
        "phone": "250-679-3167"
      },
      {
        "id": "A12F9777-011E-3335-8B86-E2D969CC3B9E",
        "name": "Gem Towing Ltd",
        "lot_address": "2359 164 Street",
        "city": "White Rock",
        "phone": "604-531-8765"
      },
      {
        "id": "76DF3F69-1EFD-296B-88A4-B00A89725ED5",
        "name": "Georgia Straight Towing",
        "lot_address": "2341 Cousins Road",
        "city": "Courtenay",
        "phone": "250-338-9899"
      },
      {
        "id": "5E917E1B-21F1-9462-5CE8-26B70A7A555B",
        "name": "Gino's Towing Inc",
        "lot_address": "296 Osilinka Drive (Mackenzie)",
        "city": "Port Coquitlam",
        "phone": "250-271-4466"
      },
      {
        "id": "2255E5CD-A6BD-4609-967A-1E88102C499A",
        "name": "Giver A Yank Towing",
        "lot_address": "611 E Stewart Street",
        "city": "Vanderhoof",
        "phone": "250-570-0077"
      },
      {
        "id": "4C420DED-937A-4189-093E-F0EFC50D49EE",
        "name": "Gateway Towing and Recovery Inc.",
        "lot_address": "524 Industrial Park",
        "city": "Gold River",
        "phone": "250-283-9141"
      },
      {
        "id": "372B6664-82DE-5D80-14C3-D0900E8D0C29",
        "name": "Good Shepherd Auto Towing",
        "lot_address": "253 Fern Road East",
        "city": "Parksville",
        "phone": "250-248-3110"
      },
      {
        "id": "54EB78B6-7261-4BA7-7D51-6B9DFB713AD0",
        "name": "Granton Motors Ltd",
        "lot_address": "RR#2 Site 140 Comp 8",
        "city": "Rock Creek",
        "phone": "250-446-2311"
      },
      {
        "id": "02C9B5E9-3417-3F63-58DC-2484590D9C00",
        "name": "Grass Creek Ventures",
        "lot_address": "Hwy Mkr 415 Hwy 37 N",
        "city": "Iskut",
        "phone": "250-234-3435"
      },
      {
        "id": "9730AF95-555F-8AF1-7555-B5E821096D75",
        "name": "Hogie's Towing",
        "lot_address": "2310 Kirton Avenue",
        "city": "Armstrong",
        "phone": "250-546-3472"
      },
      {
        "id": "0D8D32A7-1361-076C-0259-9B296E7728A1",
        "name": "Hope Towing Ltd",
        "lot_address": "1060 5 Avenue",
        "city": "Hope",
        "phone": "604-869-3444"
      },
      {
        "id": "03F70E42-5F5D-39C1-4222-E208DF7F7DBA",
        "name": "Irwin Collision Repairs Ltd",
        "lot_address": "115 Desmond Crescent",
        "city": "Saltspring Island",
        "phone": "250-537-2513"
      },
      {
        "id": "ECEF0198-9FC1-4F68-3BD3-36786E610CB3",
        "name": "Island Thunder Towing",
        "lot_address": "1801 Twin Peaks Road",
        "city": "Port McNeil",
        "phone": "250-956-2656"
      },
      {
        "id": "BB31EA0D-60CC-24B3-4111-87066FB56EA1",
        "name": "J D Towing Inc",
        "lot_address": "6585 Industrial Park Way",
        "city": "Grand Forks",
        "phone": "250-442-2551"
      },
      {
        "id": "7D8C9154-992D-9F27-5100-E4B8EA768245",
        "name": "Jacks Towing (2010) Ltd",
        "lot_address": "29092 Fraser Hwy",
        "city": "Abbotsford",
        "phone": "604-607-0774"
      },
      {
        "id": "777AEF65-4D8C-734A-6C2C-EF39643A4273",
        "name": "Jacks Towing (2010) Ltd",
        "lot_address": "2122 Peardonville Road Abbotsford V2T 6J8",
        "city": "Abbotsford",
        "phone": "604-607-0774"
      },
      {
        "id": "02B53C71-2C5F-77F3-211C-B5F1086E3469",
        "name": "Jacks Towing (2010) Ltd",
        "lot_address": "5814 107 Street Osoyoos V0H 1V4",
        "city": "Abbotsford",
        "phone": "604-607-0774"
      },
      {
        "id": "C5A1F4C7-5910-5D88-52EE-04889CDD2620",
        "name": "Jacks Towing (2010) Ltd",
        "lot_address": "7025 Abbot Street Mission",
        "city": "Abbotsford",
        "phone": "604-607-0772"
      },
      {
        "id": "2A3958FB-1DF1-1C57-5DD3-57D4FE787C84",
        "name": "Jacks Towing (2010) Ltd",
        "lot_address": "63 West Railway Ave Abbotsfort V2S8C1",
        "city": "Abbotsford",
        "phone": "604-607-0772"
      },
      {
        "id": "7D51673C-0540-12B4-1367-2DF41A1526DE",
        "name": "Jamie Davis Towing & Storage Ltd.",
        "lot_address": "19683 Silver Skagit Road",
        "city": "Hope",
        "phone": "604-869-8440"
      },
      {
        "id": "AFE9045E-91E2-5283-0906-32DC72913FF6",
        "name": "Jamie Davis Towing & Storage Ltd.",
        "lot_address": "920 King Place * Golden",
        "city": "Golden",
        "phone": "250-344-6690"
      },
      {
        "id": "47B1A8E6-5D7B-77AA-4F1D-7D98413080F8",
        "name": "Jay's Custom Towing",
        "lot_address": "341 Kaien Road",
        "city": "Prince Rupert",
        "phone": "250-624-8094"
      },
      {
        "id": "358FFCB0-685A-4146-5340-502E84477B87",
        "name": "Jimco Towing Ltd",
        "lot_address": "3982 Squilax Anglemont Hwy",
        "city": "Scotch Creek",
        "phone": "250-319-5250"
      },
      {
        "id": "528EE930-6E0D-A053-52F3-45AE05E98F3E",
        "name": "KBM Autoworks",
        "lot_address": "1862 Vernon Street",
        "city": "Lumby",
        "phone": "250-547-2356"
      },
      {
        "id": "9C3E23E9-617C-261F-A16A-789A014785E4",
        "name": "Keegz South Country Towing",
        "lot_address": "1010 Commercial Way",
        "city": "Genelle",
        "phone": "250-693-8850"
      },
      {
        "id": "FA612968-1818-12B8-2849-8ED2E1B62808",
        "name": "KMB Autobody",
        "lot_address": "1527 Tie Lake Loop Road",
        "city": "Jaffray",
        "phone": "250-429-3413"
      },
      {
        "id": "988F06CF-A5BD-79BE-5088-C8CEF65B659B",
        "name": "Komar Towing",
        "lot_address": "1300 Tachie Road",
        "city": "Fort St James",
        "phone": "250-996-2206"
      },
      {
        "id": "C590E766-9366-0645-3C82-B20BA5DE8CBE",
        "name": "Kool Country Auto Parts Towing & Rads Ltd",
        "lot_address": "Lot 150 Industrial Road #2",
        "city": "Invermere",
        "phone": "250-342-5188"
      },
      {
        "id": "6359B5F2-2DB7-82DF-545B-2A2018318C39",
        "name": "Kootenay Towing",
        "lot_address": "6635 Hwy 31",
        "city": "Kaslo",
        "phone": "250-353-2110"
      },
      {
        "id": "8809C953-1E44-45AF-292B-A8B1664363BA",
        "name": "L J's Towing & Transport",
        "lot_address": "7519 Trans Canada Hwy",
        "city": "Chase",
        "phone": "250-679-8600"
      },
      {
        "id": "D58E67D9-71F9-8894-46AB-61204E9E5271",
        "name": "Lane's Auto Towing",
        "lot_address": "258 Glen Road",
        "city": "Avola",
        "phone": "250-678-2300"
      },
      {
        "id": "917CCEFE-9A2A-91DD-06BC-7395D2BB31E9",
        "name": "Lillooet Autobody & Towing",
        "lot_address": "205 Main Street",
        "city": "Lilloote",
        "phone": "250-256-4687"
      },
      {
        "id": "73F315BF-93AA-3DAD-38E2-73789AAD7871",
        "name": "Little Mountain Towing",
        "lot_address": "1130 Dobler Road",
        "city": "Errington",
        "phone": "250-248-1132"
      },
      {
        "id": "2BAD73E3-49BF-0D3B-38C6-1A83F3A65C62",
        "name": "Long Beach Automotive Ltd",
        "lot_address": "3 671 Industrial Way",
        "city": "Tofino",
        "phone": "866-345-9060"
      },
      {
        "id": "82CCE318-3BA7-981B-4022-61AECB65011E",
        "name": "Lumby Towing",
        "lot_address": "1862 Vernon Street",
        "city": "Lumby",
        "phone": "250-547-2356"
      },
      {
        "id": "6AA33C9A-8E24-A77B-A757-1C0F958176FC",
        "name": "Mac's Towing Mission",
        "lot_address": "33201 London Ave",
        "city": "Mission",
        "phone": "604-826-9076"
      },
      {
        "id": "DB77BBDA-4CB5-7175-0D1A-6F0306E99F6E",
        "name": "Mac's Towing New Hazelton",
        "lot_address": "4167 15th Ave New Hazelton",
        "city": "New Hazelton",
        "phone": "250-842-5404"
      },
      {
        "id": "18543B29-8A30-733D-367C-09B5D58B00D2",
        "name": "Maple Ridge Towing (1981) Ltd",
        "lot_address": "23283 McKay Avenue",
        "city": "Maple Ridge",
        "phone": "604-463-5146"
      },
      {
        "id": "0BD546F0-4EB7-6764-37EE-656D458D4D46",
        "name": "Mario's Merritt Towing Ltd",
        "lot_address": "2636 Nicola Avenue",
        "city": "Merritt",
        "phone": "250-378-9241"
      },
      {
        "id": "1AA772DB-79EA-8210-2FFA-DEEED0401AD0",
        "name": "Marios Towing - Kamloops",
        "lot_address": "726 Carrier Street, Kamloops",
        "city": "Kelowna",
        "phone": "1-888-292-6054"
      },
      {
        "id": "4076A2A1-1153-864E-809F-674D2B989428",
        "name": "Marios Towing - Princeton",
        "lot_address": "401 Hwy 3 West Princeton",
        "city": "Kelowna",
        "phone": "1-888-292-6054"
      },
      {
        "id": "A9EBB384-4B11-54BC-5206-3363F0280060",
        "name": "Mario's Towing Ltd",
        "lot_address": "3015 Sexsmith Road",
        "city": "Kelowna",
        "phone": "250-765-6009"
      },
      {
        "id": "BA401AE7-A67E-18B1-40B4-B3AB662E8A6E",
        "name": "Mario's Towing Ltd - Boston Bar",
        "lot_address": "48150 Trans Canada Hwy, Boston Bar",
        "city": "Hope",
        "phone": "250-295-1427"
      },
      {
        "id": "A95E1C4F-9CCD-21D9-A127-F5D53CAE0EBD",
        "name": "Mario's Towing Ltd - Hope Division",
        "lot_address": "64211 Flood Hope Road Hope",
        "city": "Hope",
        "phone": "604-860-0725"
      },
      {
        "id": "348C1568-2426-7B4F-8486-A06AE42C5B15",
        "name": "McBrides Service Stn Ltd",
        "lot_address": "9616 Chemainus Road",
        "city": "Chemainus",
        "phone": "250-246-3341"
      },
      {
        "id": "F4F4BD38-344D-1345-1217-606345C47494",
        "name": "Me & Ron's Towing",
        "lot_address": "178 Kings Lange",
        "city": "Ganges",
        "phone": "250-537-9383"
      },
      {
        "id": "5EB71783-5D2F-876D-4A3C-C5FFEC5F276D",
        "name": "Mecham Sales & Service",
        "lot_address": "1843 MacKenzie Hwy",
        "city": "Hagensborg",
        "phone": "250-982-2345"
      },
      {
        "id": "602B2C8E-7972-021E-040D-2EACFD45893D",
        "name": "Mid Island Towing & Transport Ltd",
        "lot_address": "4900 Jordan Avenue",
        "city": "Nanaimo",
        "phone": "250-758-1728"
      },
      {
        "id": "879F5F6C-25EC-1BCC-986D-B54D45E98A85",
        "name": "Mid-Nytes Towing Inc",
        "lot_address": "1835 Coalchute Road V0H 1H2",
        "city": "Grand Forks",
        "phone": "250-442-2233"
      },
      {
        "id": "7AE83CDB-5C66-0E96-351C-5C7DBFF82339",
        "name": "Mikes's Automotive Services",
        "lot_address": "37024 97 Street",
        "city": "Oliver",
        "phone": "250-498-2004"
      },
      {
        "id": "AC2A3E5C-064F-2875-0B34-DCF440AF9D65",
        "name": "Mill Bay Towing & Recovery Ltd",
        "lot_address": "3855 Trans Canada Hwy",
        "city": "Cobble Hill",
        "phone": "250-743-1552"
      },
      {
        "id": "DECC22B0-0974-5A64-0A16-5D9708650418",
        "name": "Mission Auto Wrecking Ltd",
        "lot_address": "7143 Wren Street",
        "city": "Mission",
        "phone": "604-826-1251"
      },
      {
        "id": "B4241DF1-4BE9-29D8-635D-416FAF8296EA",
        "name": "Mission Auto Wrecking Ltd",
        "lot_address": "7428 Pioneer Ave",
        "city": "Agassiz",
        "phone": "604-796-8697"
      },
      {
        "id": "783B823A-2192-8501-423B-1733CD346E37",
        "name": "Mitchell's Towing",
        "lot_address": "997  1 Street W",
        "city": "Vancouver",
        "phone": "604-982-0115"
      },
      {
        "id": "3161AD23-4ABF-9DE4-4E7B-6C412F2066BF",
        "name": "Modern Tire & Towing Inc",
        "lot_address": "1756 #9 Hwy",
        "city": "Agassiz",
        "phone": "604-796-2611"
      },
      {
        "id": "907CE039-7EEB-4EF4-6645-1570F5D082FB",
        "name": "Monashee Motors Ltd",
        "lot_address": "3050 Birch Road",
        "city": "Valemount",
        "phone": "250-566-4318"
      },
      {
        "id": "67A55FE1-849C-0B1D-3492-DD076A7A714F",
        "name": "Mundies Towing Storage & Service Ltd",
        "lot_address": "5917 Thorne Avenue",
        "city": "Burnaby",
        "phone": "604-526-9677"
      },
      {
        "id": "D9B6FBD4-0CA0-A0BB-268F-0C6DADC15FB7",
        "name": "Mural Town Auto Service",
        "lot_address": "3483 Henry Road",
        "city": "Chemainus",
        "phone": "250-246-3322"
      },
      {
        "id": "8DA44692-A7B3-7AB4-7481-2CE9A1FC60EC",
        "name": "Nanoose Bay Towing & Transport",
        "lot_address": "1130 Dobler Road",
        "city": "Nanoose Bay",
        "phone": "250-468-9700"
      },
      {
        "id": "F5E5F29B-A149-9BCF-055A-0E9C610D0172",
        "name": "New Westminster Towing & Storage",
        "lot_address": "420 Boyne Street",
        "city": "New Westminster",
        "phone": "604-519-1026"
      },
      {
        "id": "FAF46F6C-1A0C-9631-772E-197C3C8E9F93",
        "name": "North Nakusp Towing Ltd",
        "lot_address": "1350 13 Avenue NW",
        "city": "Nakusp",
        "phone": "250-265-2265"
      },
      {
        "id": "99248AD8-3195-A550-31AA-98CEA86F7FCC",
        "name": "North River Towing (2004) Ltd",
        "lot_address": "5115 Barriere Town Road",
        "city": "Barriere",
        "phone": "250-672-0110"
      },
      {
        "id": "BB0CEFE8-7EE5-4C52-49D4-5D48AD153C2D",
        "name": "Northern Capital Towing Ltd",
        "lot_address": "1385 Foley Crescent",
        "city": "Prince George",
        "phone": "250-563-6715"
      },
      {
        "id": "8569EA2B-2314-4BE5-A194-6D4893434B65",
        "name": "O'Brien's Service & Repairs Ltd",
        "lot_address": "1007 Hwy 23",
        "city": "Nakusp",
        "phone": "250-265-4577"
      },
      {
        "id": "D2A6A32D-83D1-967A-A21E-360112C07011",
        "name": "O'Connor Motors Ltd",
        "lot_address": "44840 Yale Road",
        "city": "Chilliwack",
        "phone": "604-792-3170"
      },
      {
        "id": "FD0A570F-9001-7433-6D4C-3A2CB2C92442",
        "name": "Off Road Auto Body Ltd",
        "lot_address": "1901 Highway 99",
        "city": "Pemberton",
        "phone": "604-894-6767"
      },
      {
        "id": "4EA3C4B6-4B3D-43E8-37B8-21A2BF2771D4",
        "name": "OK Region Towing",
        "lot_address": "9403 Cedar Avenue",
        "city": "Summerland",
        "phone": "250-494-8697"
      },
      {
        "id": "9651ED3D-8956-64DF-9FBC-F14CA5E36A66",
        "name": "On Call Towing & Traffic Control",
        "lot_address": "851 Yellowhead Hwy S",
        "city": "Clearwater",
        "phone": "250-674-1869"
      },
      {
        "id": "339361B4-30E8-92CF-9D40-37C8964B7DD8",
        "name": "Otter Point Collision Ltd",
        "lot_address": "3366 Otter Point Road",
        "city": "Sooke",
        "phone": "250-642-6488"
      },
      {
        "id": "AC01398D-2CEC-35FA-5C41-26E023244424",
        "name": "Parksville Towing Ltd.",
        "lot_address": "440 East Island Hwy",
        "city": "Parksville",
        "phone": "250-248-9913"
      },
      {
        "id": "E04D66AB-97F0-3AA5-7359-E81AD13114EF",
        "name": "Partel Towing & Recovery",
        "lot_address": "5933 200 Street",
        "city": "Langley",
        "phone": "604-533-4044"
      },
      {
        "id": "33B7F49C-28BA-6742-3C0C-42BFFBA0871E",
        "name": "Payless Auto Towing Ltd (North Van)",
        "lot_address": "1433 Columbia Street",
        "city": "North Vancouver",
        "phone": "604-988-4176 Ext 3"
      },
      {
        "id": "0A9505E0-A691-94F2-5BBD-5E0AFFC56A7C",
        "name": "Payless Auto Towing Ltd (Squamish)",
        "lot_address": "39550 Galbraith Ave",
        "city": "Squamish",
        "phone": "604-988-4176 Ext 3"
      },
      {
        "id": "39C68BBB-0752-6224-6CD8-851A1EA8220F",
        "name": "Payless Auto Towing Ltd (Whistler)",
        "lot_address": "1212 Alpha Lake Road Lot A (Whistler)",
        "city": "Whistler",
        "phone": "604-988-4176 Ext 3"
      },
      {
        "id": "93DC39A0-7E47-1693-5BD8-442988262DC0",
        "name": "Payless Auto Towing Ltd (Pemberton)",
        "lot_address": "1931 Carpenter Road",
        "city": "Pemberton",
        "phone": "604-988-4176 Ext 3"
      },
      {
        "id": "5E27452F-660A-3728-3895-F830E19F83DA",
        "name": "Peninsula Towing",
        "lot_address": "6678 Bertram Place",
        "city": "Saanichton",
        "phone": "250-656-6911"
      },
      {
        "id": "BD2E3186-8238-41F9-25CA-7888D80568D2",
        "name": "Penticton Towing Ltd",
        "lot_address": "1325 Commercial Way",
        "city": "Penticton",
        "phone": "250-493-1991"
      },
      {
        "id": "8C6D7CAB-83EC-274C-47D6-755A66464CAF",
        "name": "Pete's Towing (1985) Ltd",
        "lot_address": "1893 Coulter Road",
        "city": "Campbell River",
        "phone": "250-287-2161"
      },
      {
        "id": "5628DD04-07A4-8259-6B93-B023C8CE1A74",
        "name": "Pioneer Motors",
        "lot_address": "7387 Pioneer Avenue",
        "city": "Agassiz",
        "phone": "604-796-9055"
      },
      {
        "id": "FA0BD3F1-4547-5345-91B1-6D63F30B6D97",
        "name": "Poco Auto Rescue & Recovery Ltd",
        "lot_address": "13065 76 Avenue",
        "city": "Port Coquitlam",
        "phone": "604-933-4497"
      },
      {
        "id": "41A3CB87-42D9-06EA-842C-E5460A526447",
        "name": "Prism Towing",
        "lot_address": "1443 Jade Street",
        "city": "Quesnel",
        "phone": "250-992-8868"
      },
      {
        "id": "4F1E26AD-8C86-462F-976B-CE2877B4A357",
        "name": "Pronto Towing Ltd",
        "lot_address": "2290 Queensway Drive",
        "city": "Terrace",
        "phone": "250-635-3113"
      },
      {
        "id": "114303F6-58E6-1A4B-51DF-DA20826B82A7",
        "name": "Protow",
        "lot_address": "1 4505 23 Street",
        "city": "Vernon",
        "phone": "250-549-2077"
      },
      {
        "id": "E912791A-9759-7B7A-71B5-C0F172949E1E",
        "name": "Quiring Motors (1994) Ltd",
        "lot_address": "26744 16 Avenue",
        "city": "Aldergrove",
        "phone": "604-856-8721"
      },
      {
        "id": "9EE49F02-67BE-67A1-5EC4-857D2C42A4D0",
        "name": "Reliable Towing",
        "lot_address": "7168 Wren Street",
        "city": "Mission",
        "phone": "604-826-8621"
      },
      {
        "id": "5A44BCAA-0711-33FB-6315-E0F03CAA9E89",
        "name": "Reliable Towing Merritt Ltd",
        "lot_address": "1141 McFarlane Way",
        "city": "Merritt",
        "phone": "250-378-5000"
      },
      {
        "id": "5315429E-6BD9-95F8-281C-68851F75536D",
        "name": "Rezilliant Transport Ltd",
        "lot_address": "7915 101 Avenue",
        "city": "Fort St John",
        "phone": "250-793-7139"
      },
      {
        "id": "BE6151A9-2DAA-4638-91FD-FC98D10D1D0D",
        "name": "Rich Boyz Mechanical Ltd",
        "lot_address": "1098 N/E Frontage Road",
        "city": "Mcbride",
        "phone": "250-569-2470"
      },
      {
        "id": "001AC0FF-2A9D-47A7-7CA7-67B4391F1A6E",
        "name": "Roadhouse Towing Ltd",
        "lot_address": "517 Trans Canada Hwy S",
        "city": "Cache Creek",
        "phone": "250-457-9594"
      },
      {
        "id": "14724107-9F01-6EA6-1D2D-D05B0B8D6821",
        "name": "Roadway Towing Ltd",
        "lot_address": "7391 Progress Place",
        "city": "Delta",
        "phone": "604-940-0329"
      },
      {
        "id": "34B52FAF-A17C-8FB3-4483-19C09A59224F",
        "name": "Robert's Towing",
        "lot_address": "6233 Wildmare Road",
        "city": "Chetwynd",
        "phone": "250-788-9194"
      },
      {
        "id": "62F74C17-8D7C-6DA5-4FB4-B05DFE4B724E",
        "name": "Ron's Towing",
        "lot_address": "1360 Foley Crescent",
        "city": "Prince George",
        "phone": "250-564-8444"
      },
      {
        "id": "D857310B-3113-8DD1-A332-36A1B4754D8F",
        "name": "Ron's Towing (Sintich Road)",
        "lot_address": "1890 Sintich Road",
        "city": "Prince George",
        "phone": "250-564-8444"
      },
      {
        "id": "AC8A926E-5B13-611D-3F5D-37900FB48EB5",
        "name": "Rookz's Auto Body Ltd.",
        "lot_address": "1994 Highway #3",
        "city": "Fernie",
        "phone": "250-423-7900"
      },
      {
        "id": "8C66C78F-0E18-6616-5B51-598E5802804D",
        "name": "Rupert Towing",
        "lot_address": "101 Shawatlan Road",
        "city": "Prince Rupert",
        "phone": "250-624-2722"
      },
      {
        "id": "E5D3C08F-50A7-3F60-8DEF-76B6513B5C0C",
        "name": "Rusty's Auto Towing",
        "lot_address": "15700 River Road",
        "city": "Richmond",
        "phone": "604-278-1106"
      },
      {
        "id": "7723C09B-A2AF-A07E-1520-720D46D725CF",
        "name": "Scrap King Auto Wrecking & Towing Creston",
        "lot_address": "211 Collis Street Creston",
        "city": "Salmo",
        "phone": "250-428-2323"
      },
      {
        "id": "F9745B19-2476-1A9F-11A8-464675C43B53",
        "name": "Scrap King Auto Wrecking & Towing Salmo",
        "lot_address": "1660 Airport Road",
        "city": "Salmo",
        "phone": "250-357-2091"
      },
      {
        "id": "CEC0E645-0A33-7AD7-8FDC-907B5E51772E",
        "name": "Seeley Lake Service Ltd",
        "lot_address": "3479 Kelly Street",
        "city": "Hazelton",
        "phone": "250-842-6465"
      },
      {
        "id": "E45D3B27-87CD-7810-3C25-00A05F4B08A4",
        "name": "Skookum Towing Ltd",
        "lot_address": "414 Fountain Vallley Road",
        "city": "Lillooet",
        "phone": "250-256-4789"
      },
      {
        "id": "FAAE38C1-24ED-2861-9E15-4D66CC716260",
        "name": "Smokey Creek Salvage Ltd",
        "lot_address": "3453 Yeatman Road",
        "city": "South Slocan",
        "phone": "250-359-7815"
      },
      {
        "id": "96388082-7B2B-051E-38FB-7572A2C220A6",
        "name": "Sorrento Towing & Recovery",
        "lot_address": "2827 Hilltop Road",
        "city": "Sorrento",
        "phone": "250-833-7722"
      },
      {
        "id": "29797EE7-693D-3416-0ED4-479D4F7C7C96",
        "name": "Southview Auto Towing Ltd",
        "lot_address": "15700 River Road",
        "city": "Richmond",
        "phone": "604-435-7211"
      },
      {
        "id": "ACCAF73A-5223-8FC7-3DF9-4BD175BC5B4B",
        "name": "Sparwood Towing (Ridgemont Avenue)",
        "lot_address": "1291 Ridgemont Avenue 621 Douglas Fir Road waiting for updated application",
        "city": "Sparwood",
        "phone": "250-425-2721"
      },
      {
        "id": "A859131C-323B-03A8-1A99-AF19450B5C66",
        "name": "Sparwood Towing (Shadow Drive)",
        "lot_address": "25 Shadow Drive",
        "city": "Sparwood",
        "phone": "250-425-2721"
      },
      {
        "id": "8A344426-5DB9-0047-70D1-4F0664E85A2F",
        "name": "Specialized Towing Limited",
        "lot_address": "150 Glacier Street",
        "city": "Coquitlam",
        "phone": "604-209-9917"
      },
      {
        "id": "7A8A74F3-A478-8078-7CD4-ACE7C861010B",
        "name": "Summerland Towing",
        "lot_address": "1325 Commercial Way",
        "city": "Summerland",
        "phone": "250-493-1991"
      },
      {
        "id": "5A26DFEE-6381-9774-9F69-79DAD74F9BD7",
        "name": "Sunshine Coast Auto Towing Ltd",
        "lot_address": "5880 Sechelt Inlet Road",
        "city": "Sechelt",
        "phone": "604-740-3939"
      },
      {
        "id": "1D1272EB-5308-48E6-622F-9BAE47E2409B",
        "name": "Terry's Towing Service",
        "lot_address": "252 1 Avenue",
        "city": "Trail",
        "phone": "250-368-0070"
      },
      {
        "id": "7B5CA6B0-0385-4F2C-45D6-93AAFA543462",
        "name": "Thunder Valley Towing",
        "lot_address": "1455 5 Avenue Valemount",
        "city": "Mcbride",
        "phone": "250-569-7007"
      },
      {
        "id": "A447C99A-4DE2-89CE-1732-F5BA2745642E",
        "name": "Tiger Towing Ltd (Duncan)",
        "lot_address": "4860 Trans Canada Hwy",
        "city": "Duncan",
        "phone": "250-701-8697"
      },
      {
        "id": "F1D1EDFD-69DC-4054-0BEA-5B039B0C2D3F",
        "name": "TJ'S Towing & Storage",
        "lot_address": "1301 Railway Avenue",
        "city": "Fernie",
        "phone": "250-423-1646"
      },
      {
        "id": "1C778CD3-2B80-3BF5-74C5-66D7B46AA758",
        "name": "TLC Automotive Services Ltd",
        "lot_address": "1981 Collision Avenue",
        "city": "Masset",
        "phone": "250-626-3756"
      },
      {
        "id": "BDEC5EAC-2321-7E24-1565-26D704D363A6",
        "name": "Totem Towing",
        "lot_address": "3333 Tennyson Avenue",
        "city": "Victoria",
        "phone": "250-475-3211"
      },
      {
        "id": "78899E31-19AC-296D-19F1-B7AEF0116CB1",
        "name": "Tylers Towing (2013) Ltd",
        "lot_address": "3435 Victoria Drive",
        "city": "Smithers",
        "phone": "250-847-2413"
      },
      {
        "id": "229C731E-5123-3BBB-1299-4BDBDDF671B4",
        "name": "United Towing Services Inc",
        "lot_address": "1025 10 Avenue North",
        "city": "Golden",
        "phone": "250-344-5900"
      },
      {
        "id": "826E1B34-6EE3-09A6-3EB1-EDD0C473A21F",
        "name": "Unitow Services (1978) Ltd (Surrey)",
        "lot_address": "13065 76 Avenue",
        "city": "Surrey",
        "phone": "604-592-1255"
      },
      {
        "id": "7B609313-A283-09BA-856E-906BB07868C9",
        "name": "Unitow Vancouver  (1978) Ltd (Vancouver)",
        "lot_address": "1717 Vernon Drive",
        "city": "Vancouver",
        "phone": "604-659-1255"
      },
      {
        "id": "F80A02D9-7F1C-6318-4CA3-1D6D4DF0181D",
        "name": "Usher's Towing",
        "lot_address": "101 11129 115 Street",
        "city": "Osoyoos",
        "phone": "250-495-7752"
      },
      {
        "id": "F7F1BF5F-1AD5-50EC-8101-EE2851C3995B",
        "name": "Van Horne Towing (2000) Ltd",
        "lot_address": "412 Cobham Avenue W",
        "city": "Cranbrook",
        "phone": "250-426-4243"
      },
      {
        "id": "49415E00-22CD-625F-31C4-AC0CA8BA30DC",
        "name": "Vernon Auto Towing Ltd",
        "lot_address": "4617 B 34 Street",
        "city": "Vernon",
        "phone": "250-545-2311"
      },
      {
        "id": "4CC0B2D5-7882-50E6-79E7-3C3AEAA36485",
        "name": "Wally's Autobody Ltd",
        "lot_address": "8832 Young Road",
        "city": "Chilliwack",
        "phone": "604-795-9108"
      },
      {
        "id": "B93136F0-1C3E-A283-8AB0-C756FD0B2F35",
        "name": "Walt's Towing & Automotive Service",
        "lot_address": "694 Gibsons Way",
        "city": "Gibsons",
        "phone": "604-886-9500"
      },
      {
        "id": "0F67F5F1-8B3E-7F3F-0521-15A91E1E3FE4",
        "name": "Warbrick Towing & Salvage",
        "lot_address": "170 Hwy 93/95 Shuswap Reserve",
        "city": "Invermere",
        "phone": "250-342-5851"
      },
      {
        "id": "19C04C79-84BE-542A-A3DB-E308F000A3CF",
        "name": "Wayne's Towing Ltd",
        "lot_address": "140 Metlakatla Road",
        "city": "Prince Rupert",
        "phone": "250-627-6166"
      },
      {
        "id": "CAB12875-39E4-1805-26F7-642CBF2B8433",
        "name": "Western Autowreckers Ltd",
        "lot_address": "2374 Granite Road",
        "city": "Nelson",
        "phone": "250-354-4802"
      },
      {
        "id": "30D7F06E-5CEF-42E7-01A4-76AC0D2E8233",
        "name": "Westshore Towing Ltd",
        "lot_address": "1247 Parkdale Drive",
        "city": "Victoria",
        "phone": "250-474-1369"
      },
      {
        "id": "3D8CAB0C-5708-336F-05DF-8B8FB6492ED4",
        "name": "Whistler Towing Ltd",
        "lot_address": "1212 Alpha Lake Road Lot A (Whistler)",
        "city": "Whistler",
        "phone": "604-966-8535"
      },
      {
        "id": "4140D6F5-6A54-66E9-8D9C-996D48E80BF3",
        "name": "White Knight Auto Rescue Ltd",
        "lot_address": "601 Bass Ave",
        "city": "Enderby",
        "phone": "250-838-6402"
      },
      {
        "id": "840B4843-4260-6694-27B7-348659426443",
        "name": "Wrench Bender Towing (2004)",
        "lot_address": "8898 Shaughnessy Street",
        "city": "Canal Flats",
        "phone": "250-349-5655"
      },
      {
        "id": "56709777-9819-8A97-8374-12F0B548989F",
        "name": "Ziggy's Towing",
        "lot_address": "3558 Victoria Drive Smithers",
        "city": "Telkwa",
        "phone": "250-877-8687"
      }
    ],
    isUserAuthorized: true,
    isOnline: true,
    jurisdictions: [
      {
        "objectCd": "AL",
        "objectDsc": "Alabama",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "AK",
        "objectDsc": "Alaska",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "AB",
        "objectDsc": "Alberta",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "AZ",
        "objectDsc": "Arizona",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "AR",
        "objectDsc": "Arkansas",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "BC",
        "objectDsc": "British Columbia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "CA",
        "objectDsc": "California",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "CF",
        "objectDsc": "Canadian Forces",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "CO",
        "objectDsc": "Colorado",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "CT",
        "objectDsc": "Connecticut",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "DE",
        "objectDsc": "Delaware",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "DC",
        "objectDsc": "District of Columbia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "FL",
        "objectDsc": "Florida",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "GA",
        "objectDsc": "Georgia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "HI",
        "objectDsc": "Hawaii",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "ID",
        "objectDsc": "Idaho",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "IL",
        "objectDsc": "Illinois",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "IN",
        "objectDsc": "Indiana",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "IA",
        "objectDsc": "Iowa",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "KS",
        "objectDsc": "Kansas",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "KY",
        "objectDsc": "Kentucky",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "LA",
        "objectDsc": "Louisiana",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "ME",
        "objectDsc": "Maine",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MB",
        "objectDsc": "Manitoba",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MD",
        "objectDsc": "Maryland",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MA",
        "objectDsc": "Massachusetts",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MX",
        "objectDsc": "Mexico",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MI",
        "objectDsc": "Michigan",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MN",
        "objectDsc": "Minnesota",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MS",
        "objectDsc": "Mississippi",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MO",
        "objectDsc": "Missouri",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "MT",
        "objectDsc": "Montana",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NE",
        "objectDsc": "Nebraska",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NV",
        "objectDsc": "Nevada",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NB",
        "objectDsc": "New Brunswick",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NH",
        "objectDsc": "New Hampshire",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NJ",
        "objectDsc": "New Jersey",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NM",
        "objectDsc": "New Mexico",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NY",
        "objectDsc": "New York",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NF",
        "objectDsc": "Newfoundland",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NR",
        "objectDsc": "Non Reciprocity",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NC",
        "objectDsc": "North Carolina",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "ND",
        "objectDsc": "North Dakota",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NT",
        "objectDsc": "North West Territories",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NS",
        "objectDsc": "Nova Scotia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "NU",
        "objectDsc": "Nunavut",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "OH",
        "objectDsc": "Ohio",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "OK",
        "objectDsc": "Oklahoma",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "ON",
        "objectDsc": "Ontario",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "OR",
        "objectDsc": "Oregon",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "FD",
        "objectDsc": "Other Foreign Licence",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "PA",
        "objectDsc": "Pennsylvania",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "PE",
        "objectDsc": "Prince Edward Island",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "PR",
        "objectDsc": "Puerto Rico",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "QC",
        "objectDsc": "Quebec",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "RI",
        "objectDsc": "Rhode Island",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "SK",
        "objectDsc": "Saskatchewan",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "SC",
        "objectDsc": "South Carolina",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "SD",
        "objectDsc": "South Dakota",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "TN",
        "objectDsc": "Tennessee",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "TX",
        "objectDsc": "Texas",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "XX",
        "objectDsc": "Unknown",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "UT",
        "objectDsc": "Utah",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "VT",
        "objectDsc": "Vermont",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "VA",
        "objectDsc": "Virginia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "WA",
        "objectDsc": "Washington",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "WV",
        "objectDsc": "West Virginia",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "WI",
        "objectDsc": "Wisconsin",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "WY",
        "objectDsc": "Wyoming",
        "activeYN": "Y",
        "internalYN": null
      },
      {
        "objectCd": "YT",
        "objectDsc": "Yukon Territory",
        "activeYN": "Y",
        "internalYN": null
      }
    ],
    keycloak: {},
    pickup_locations: [],
    provinces: [
      {
        "objectCd": "AK",
        "objectDsc": "ALASKA"
      },
      {
        "objectCd": "ALTA",
        "objectDsc": "ALBERTA"
      },
      {
        "objectCd": "AL",
        "objectDsc": "ALABAMA"
      },
      {
        "objectCd": "AR",
        "objectDsc": "ARKANSAS"
      },
      {
        "objectCd": "AZ",
        "objectDsc": "ARIZONA"
      },
      {
        "objectCd": "BC",
        "objectDsc": "BRITISH COLUMBIA"
      },
      {
        "objectCd": "CA",
        "objectDsc": "CALIFORNIA"
      },
      {
        "objectCd": "CO",
        "objectDsc": "COLORADO"
      },
      {
        "objectCd": "CT",
        "objectDsc": "CONNECTICUT"
      },
      {
        "objectCd": "DC",
        "objectDsc": "DISTRICT OF COLUMBIA"
      },
      {
        "objectCd": "DE",
        "objectDsc": "DELAWARE"
      },
      {
        "objectCd": "EUR",
        "objectDsc": "EUROPE"
      },
      {
        "objectCd": "FL",
        "objectDsc": "FLORIDA"
      },
      {
        "objectCd": "GA",
        "objectDsc": "GEORGIA"
      },
      {
        "objectCd": "HI",
        "objectDsc": "HAWAII"
      },
      {
        "objectCd": "IA",
        "objectDsc": "IOWA"
      },
      {
        "objectCd": "ID",
        "objectDsc": "IDAHO"
      },
      {
        "objectCd": "IL",
        "objectDsc": "ILLINOIS"
      },
      {
        "objectCd": "INTL",
        "objectDsc": "INTERNATIONAL"
      },
      {
        "objectCd": "IN",
        "objectDsc": "INDIANA"
      },
      {
        "objectCd": "KS",
        "objectDsc": "KANSAS"
      },
      {
        "objectCd": "KY",
        "objectDsc": "KENTUCKY"
      },
      {
        "objectCd": "LA",
        "objectDsc": "LOUISIANA"
      },
      {
        "objectCd": "MAN",
        "objectDsc": "MANITOBA"
      },
      {
        "objectCd": "MA",
        "objectDsc": "MASSACHUSETTS"
      },
      {
        "objectCd": "MD",
        "objectDsc": "MARYLAND"
      },
      {
        "objectCd": "ME",
        "objectDsc": "MAINE"
      },
      {
        "objectCd": "MI",
        "objectDsc": "MICHIGAN"
      },
      {
        "objectCd": "MN",
        "objectDsc": "MINNESOTA"
      },
      {
        "objectCd": "MO",
        "objectDsc": "MISSOURI"
      },
      {
        "objectCd": "MS",
        "objectDsc": "MISSISSIPPI"
      },
      {
        "objectCd": "MT",
        "objectDsc": "MONTANA"
      },
      {
        "objectCd": "MX",
        "objectDsc": "MEXICO"
      },
      {
        "objectCd": "NA",
        "objectDsc": "NEBRASKA"
      },
      {
        "objectCd": "NB",
        "objectDsc": "NEW BRUNSWICK"
      },
      {
        "objectCd": "NC",
        "objectDsc": "NORTH CAROLINA"
      },
      {
        "objectCd": "ND",
        "objectDsc": "NORTH DAKOTA"
      },
      {
        "objectCd": "NFLD",
        "objectDsc": "NEWFOUNDLAND"
      },
      {
        "objectCd": "NH",
        "objectDsc": "NEW HAMPSHIRE"
      },
      {
        "objectCd": "NJ",
        "objectDsc": "NEW JERSEY"
      },
      {
        "objectCd": "NM",
        "objectDsc": "NEW MEXICO"
      },
      {
        "objectCd": "NS",
        "objectDsc": "NOVA SCOTIA"
      },
      {
        "objectCd": "NVT",
        "objectDsc": "NUNAVUT"
      },
      {
        "objectCd": "NV",
        "objectDsc": "NEVADA"
      },
      {
        "objectCd": "NWT",
        "objectDsc": "NORTHWEST TERRITORY"
      },
      {
        "objectCd": "NY",
        "objectDsc": "NEW YORK"
      },
      {
        "objectCd": "OH",
        "objectDsc": "OHIO"
      },
      {
        "objectCd": "OK",
        "objectDsc": "OKLAHOMA"
      },
      {
        "objectCd": "ONT",
        "objectDsc": "ONTARIO"
      },
      {
        "objectCd": "OR",
        "objectDsc": "OREGON"
      },
      {
        "objectCd": "OTH",
        "objectDsc": "OTHER"
      },
      {
        "objectCd": "PA",
        "objectDsc": "PENNSYLVANIA"
      },
      {
        "objectCd": "PEI",
        "objectDsc": "PRINCE EDWARD ISLAND"
      },
      {
        "objectCd": "PR",
        "objectDsc": "PUERTO RICO"
      },
      {
        "objectCd": "QUE",
        "objectDsc": "QUEBEC"
      },
      {
        "objectCd": "RI",
        "objectDsc": "RHODE ISLAND"
      },
      {
        "objectCd": "SASK",
        "objectDsc": "SASKATCHEWAN"
      },
      {
        "objectCd": "SC",
        "objectDsc": "SOUTH CAROLINA"
      },
      {
        "objectCd": "SD",
        "objectDsc": "SOUTH DAKOTA"
      },
      {
        "objectCd": "TS",
        "objectDsc": "TENNESSEE"
      },
      {
        "objectCd": "TX",
        "objectDsc": "TEXAS"
      },
      {
        "objectCd": "UK",
        "objectDsc": "UNITED KINGDOM"
      },
      {
        "objectCd": "UT",
        "objectDsc": "UTAH"
      },
      {
        "objectCd": "VA",
        "objectDsc": "VIRGINIA"
      },
      {
        "objectCd": "VI",
        "objectDsc": "VIRGIN ISLANDS"
      },
      {
        "objectCd": "VT",
        "objectDsc": "VERMONT"
      },
      {
        "objectCd": "WA",
        "objectDsc": "WASHINGTON"
      },
      {
        "objectCd": "WI",
        "objectDsc": "WISCONSIN"
      },
      {
        "objectCd": "WV",
        "objectDsc": "WEST VIRGINIA"
      },
      {
        "objectCd": "WY",
        "objectDsc": "WYOMING"
      },
      {
        "objectCd": "YT",
        "objectDsc": "YUKON TERRITORY"
      }
    ],
    user_roles: {},
    users: {
      agency: '',
      badge_number: '',
      first_name: '',
      last_name: '',
      user_guid: '',
      username: ''
    },
    vehicles: [
      {
        "mk": "AMGN",
        "search": " - Hummer",
        "md": "HUMM"
      },
      {
        "mk": "AC",
        "search": "A C (GREAT BRITIAN) - 3000 ME",
        "md": "300"
      },
      {
        "mk": "ABAR",
        "search": "ABARTH - ",
        "md": ""
      },
      {
        "mk": "COBR",
        "search": "AC COBRA - ",
        "md": ""
      },
      {
        "mk": "ACAD",
        "search": "ACADIAN (GM OF CANADA) - BEAUMONT SERIES",
        "md": "BEAU"
      },
      {
        "mk": "ACAD",
        "search": "ACADIAN (GM OF CANADA) - CANSO SERIES",
        "md": "CANS"
      },
      {
        "mk": "ACAD",
        "search": "ACADIAN (GM OF CANADA) - INVADER SERIES",
        "md": "INVA"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 1.6 EL",
        "md": "1.6E"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 1.7 EL",
        "md": "1.7E"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 2.3",
        "md": "2.3"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 2.5 TL",
        "md": "2.5T"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 3.2 TL",
        "md": "3.2T"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 3.2CL",
        "md": "3.2C"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - 3.5 RL",
        "md": "3.5R"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - CL (SPORTS COUPE)",
        "md": "CL"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - CSX",
        "md": "CSX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - EL",
        "md": "EL"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - ILX",
        "md": "ILX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - INTEGRA",
        "md": "INTE"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - LEGEND",
        "md": "LEGE"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - MDX",
        "md": "MDX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - NSX",
        "md": "NSX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - RDX",
        "md": "RDX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - RL",
        "md": "RL"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - RSX",
        "md": "RSX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - SLX (SPORTS UTILITY)",
        "md": "SLX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - TL",
        "md": "ATL"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - TLX",
        "md": "TLX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - TSX",
        "md": "TSX"
      },
      {
        "mk": "ACUR",
        "search": "ACURA - VIGOR",
        "md": "VIGO"
      },
      {
        "mk": "ADET",
        "search": "ADETTE - ",
        "md": ""
      },
      {
        "mk": "ADVA",
        "search": "ADVANCED - ",
        "md": ""
      },
      {
        "mk": "AERO",
        "search": "AEROCAR - ",
        "md": ""
      },
      {
        "mk": "AETA",
        "search": "AETA - ",
        "md": ""
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - 164",
        "md": "164"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - ALFA GT6",
        "md": "GT6"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - ALFETTA GT",
        "md": "AGT"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - ARNA",
        "md": "ARN"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - BERLINA",
        "md": "BERL"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - C4",
        "md": "C4"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - DUETTO",
        "md": "DUET"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - GIULIA",
        "md": "GIUL"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - GIULIA SPRINT",
        "md": "SPRI"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - GT VELOCE",
        "md": "VELO"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - GTV6 2.5",
        "md": "G25"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - MILANO",
        "md": "MILA"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - MONTREAL",
        "md": "MONT"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - SPIDER SERIES",
        "md": "SPYD"
      },
      {
        "mk": "ALFA",
        "search": "ALFA ROMEO - ZAGATO",
        "md": "ZAGA"
      },
      {
        "mk": "ALLS",
        "search": "ALL STATE - ",
        "md": ""
      },
      {
        "mk": "ALLA",
        "search": "ALLARD - ",
        "md": ""
      },
      {
        "mk": "ALCI",
        "search": "ALLEN COACHWORKS INC. - ",
        "md": ""
      },
      {
        "mk": "ALLF",
        "search": "ALLISONS FIBERGLASS MFG.INC. - ",
        "md": ""
      },
      {
        "mk": "ALMA",
        "search": "ALMA - ",
        "md": ""
      },
      {
        "mk": "ALPI",
        "search": "ALPHINE - ",
        "md": ""
      },
      {
        "mk": "ALTA",
        "search": "ALTA - ",
        "md": ""
      },
      {
        "mk": "ALVI",
        "search": "ALVIS - ",
        "md": ""
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - ALLIANCE",
        "md": "ALLI"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - AMBASSADOR",
        "md": "AMBA"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - AMERICAN",
        "md": "AMER"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - AMX",
        "md": "AMX"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - CONCORD",
        "md": "CONC"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - EAGLE",
        "md": "EAGL"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - ENCORE",
        "md": "ENCO"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - GREMLIN",
        "md": "GREM"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - HORNET",
        "md": "HORN"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - JAVELIN",
        "md": "JAVE"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - MARLIN",
        "md": "MARL"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - MATADOR",
        "md": "MATA"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - MEDALLION",
        "md": "MEDA"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - PACER",
        "md": "PACE"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - RAMBLER",
        "md": "RAMB"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - REBEL",
        "md": "REBE"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - SPIRIT",
        "md": "SPIR"
      },
      {
        "mk": "AMER",
        "search": "AMERICAN MOTORS - SPORTABOUT",
        "md": "SPOR"
      },
      {
        "mk": "AMPH",
        "search": "AMPHICAR - ",
        "md": ""
      },
      {
        "mk": "ANSE",
        "search": "ANSER MANUFACTURING LTD - ",
        "md": ""
      },
      {
        "mk": "ARGO",
        "search": "ARGONAUT STATE LIMOUSINE - ",
        "md": ""
      },
      {
        "mk": "ARIS",
        "search": "ARISTA - ",
        "md": ""
      },
      {
        "mk": "ARMS",
        "search": "ARMSTRONG SIDDELEY - ",
        "md": ""
      },
      {
        "mk": "ARNO",
        "search": "ARNOLT-BRISTOL - ",
        "md": ""
      },
      {
        "mk": "ASA",
        "search": "ASA - ",
        "md": ""
      },
      {
        "mk": "ASCO",
        "search": "ASCORT - ",
        "md": ""
      },
      {
        "mk": "ASHL",
        "search": "ASHLEY - ",
        "md": ""
      },
      {
        "mk": "ASVE",
        "search": "ASSEMBLED VEHICLE - ",
        "md": ""
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - DB-5",
        "md": "DB5"
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - DB-6",
        "md": "DB6"
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - DB7(COUPE)",
        "md": "DB7"
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - LAGONDA",
        "md": "LAGO"
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - VANTAGE",
        "md": "VANT"
      },
      {
        "mk": "ASTO",
        "search": "ASTON-MARTIN - VIRAGE (SALOON)",
        "md": "VIR"
      },
      {
        "mk": "ASUN",
        "search": "ASUNA - GT",
        "md": "GT"
      },
      {
        "mk": "ASUN",
        "search": "ASUNA - SE",
        "md": "SE"
      },
      {
        "mk": "ASUN",
        "search": "ASUNA - SUNFIRE",
        "md": "SUNF"
      },
      {
        "mk": "ASUN",
        "search": "ASUNA - SUNRUNNER",
        "md": "SUNR"
      },
      {
        "mk": "AUBU",
        "search": "AUBURN - ",
        "md": ""
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 100",
        "md": "100"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 100GL",
        "md": "1GL"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 100LS",
        "md": "1LS"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 200LS",
        "md": "200"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 4000",
        "md": "400"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 5000",
        "md": "500"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 80",
        "md": "A80"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 80 LS (FOX)",
        "md": "FOX"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 850",
        "md": "850"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - 90",
        "md": "A90"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A3",
        "md": "A3"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A4",
        "md": "A4"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A5",
        "md": "A5"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A6",
        "md": "A6"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A7",
        "md": "A7"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - A8",
        "md": "A8"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - AS4",
        "md": "AS4"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - AVANT",
        "md": "AVA"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - CABRIOLET",
        "md": "CABR"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - E-TRON",
        "md": "ETRO"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - Q3",
        "md": "Q3"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - Q5",
        "md": "Q5"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - Q7",
        "md": "Q7"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - Q8",
        "md": "Q8"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - QUATTRO",
        "md": "QUAT"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - R8",
        "md": "R8"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - RS3",
        "md": "RS3"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - RS5",
        "md": "RS5"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - RS6",
        "md": "RS6"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - S3",
        "md": "S3"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - S4",
        "md": "S4"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - S5",
        "md": "S5"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - S6",
        "md": "AS6"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - S6",
        "md": "S6"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - SQ5",
        "md": "SQ5"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - SUPER 90",
        "md": "S90"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - TT",
        "md": "TT"
      },
      {
        "mk": "AUDI",
        "search": "AUDI - V-8",
        "md": "V8"
      },
      {
        "mk": "AURO",
        "search": "AURORA - ",
        "md": ""
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - 100 SERIES",
        "md": "100"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - 1100",
        "md": "110"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - 1800",
        "md": "180"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - 3000 SERIES",
        "md": "300"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - 850",
        "md": "850"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - A40",
        "md": "A40"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - A55",
        "md": "A55"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - A99 & 110",
        "md": "A10"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - CAMBRIDGE",
        "md": "A60"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - COOPER S",
        "md": "CPS"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - MARINA",
        "md": "MARI"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - MINI",
        "md": "MINI"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - SPRITE",
        "md": "SPRI"
      },
      {
        "mk": "AUST",
        "search": "AUSTIN-HEALY - WESTMINSTER",
        "md": "WEST"
      },
      {
        "mk": "AUTU",
        "search": "AUTO UNION - ",
        "md": ""
      },
      {
        "mk": "AUTA",
        "search": "AUTOBIANCHI - ",
        "md": ""
      },
      {
        "mk": "AUTB",
        "search": "AUTOBIEU - ",
        "md": ""
      },
      {
        "mk": "AUTO",
        "search": "AUTOCAR - ",
        "md": ""
      },
      {
        "mk": "AUTR",
        "search": "AUTOCARRIER AND A.C. - ",
        "md": ""
      },
      {
        "mk": "AUKR",
        "search": "AUTOKRAFT - ",
        "md": ""
      },
      {
        "mk": "AVAN",
        "search": "AVANTI - SERIES A",
        "md": "AAV"
      },
      {
        "mk": "AVAN",
        "search": "AVANTI - SERIES B",
        "md": "ABV"
      },
      {
        "mk": "AVEN",
        "search": "AVENGER - ",
        "md": ""
      },
      {
        "mk": "AVIA",
        "search": "AVIA - ",
        "md": ""
      },
      {
        "mk": "BZEL",
        "search": "B & Z ELECTRIC CAR CO. - CADILLAC",
        "md": "CADI"
      },
      {
        "mk": "BZEL",
        "search": "B & Z ELECTRIC CAR CO. - ELECTRA-KING",
        "md": "ELEC"
      },
      {
        "mk": "BMC",
        "search": "B M C - PRINCESS",
        "md": "PRI"
      },
      {
        "mk": "BANT",
        "search": "BANTAM - ",
        "md": ""
      },
      {
        "mk": "BAY",
        "search": "BAYLINER - ",
        "md": ""
      },
      {
        "mk": "BEAR",
        "search": "BEARDMORE - ",
        "md": ""
      },
      {
        "mk": "BEDF",
        "search": "BEDFORD - ",
        "md": ""
      },
      {
        "mk": "BEJE",
        "search": "BEIJING JEEP - GANG STAR",
        "md": "TK"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - ARNAGE",
        "md": "ARN"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - AZURE",
        "md": "AZU"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - BROOKLANDS",
        "md": "BROO"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - CONTINENTAL CONVERTIBLE",
        "md": "CONT"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - CORNICHE",
        "md": "CORN"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - EIGHT",
        "md": "EIGH"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - MULSANNE",
        "md": "MULS"
      },
      {
        "mk": "BENT",
        "search": "BENTLEY - TURBO R",
        "md": "TBR"
      },
      {
        "mk": "BERG",
        "search": "BERGANTINE - ",
        "md": ""
      },
      {
        "mk": "BERK",
        "search": "BERKELEY - ",
        "md": ""
      },
      {
        "mk": "BERO",
        "search": "BERTONE - CABRIO",
        "md": "CABR"
      },
      {
        "mk": "BERO",
        "search": "BERTONE - PALINURO",
        "md": "PALI"
      },
      {
        "mk": "BERO",
        "search": "BERTONE - X19",
        "md": "X19"
      },
      {
        "mk": "BESA",
        "search": "BESASIE AUTOMOBILE CO. INC. - BACI",
        "md": "BAC"
      },
      {
        "mk": "BIGT",
        "search": "BIG TEX - DUMP",
        "md": "DUMP"
      },
      {
        "mk": "BITT",
        "search": "BITTER - ",
        "md": ""
      },
      {
        "mk": "BIZZ",
        "search": "BIZZARRINI - ",
        "md": ""
      },
      {
        "mk": "BLUE",
        "search": "BLUEBIRD - ",
        "md": ""
      },
      {
        "mk": "BMW",
        "search": "BMW - 128i",
        "md": "128I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 135i",
        "md": "135I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 1600",
        "md": "160"
      },
      {
        "mk": "BMW",
        "search": "BMW - 1800",
        "md": "180"
      },
      {
        "mk": "BMW",
        "search": "BMW - 2.8",
        "md": "2.8"
      },
      {
        "mk": "BMW",
        "search": "BMW - 2000 SERIES",
        "md": "200"
      },
      {
        "mk": "BMW",
        "search": "BMW - 2002 SERIES",
        "md": "202"
      },
      {
        "mk": "BMW",
        "search": "BMW - 230i",
        "md": "230I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 2500 SERIES",
        "md": "250"
      },
      {
        "mk": "BMW",
        "search": "BMW - 2800 SERIES",
        "md": "280"
      },
      {
        "mk": "BMW",
        "search": "BMW - 3.0 si",
        "md": "3"
      },
      {
        "mk": "BMW",
        "search": "BMW - 318i",
        "md": "318i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 318ti",
        "md": "318T"
      },
      {
        "mk": "BMW",
        "search": "BMW - 320i",
        "md": "320"
      },
      {
        "mk": "BMW",
        "search": "BMW - 323i",
        "md": "323I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 325",
        "md": "325"
      },
      {
        "mk": "BMW",
        "search": "BMW - 325i",
        "md": "32I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 328d",
        "md": "328D"
      },
      {
        "mk": "BMW",
        "search": "BMW - 328i",
        "md": "28I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 328is",
        "md": "328"
      },
      {
        "mk": "BMW",
        "search": "BMW - 330 SERIES",
        "md": "330"
      },
      {
        "mk": "BMW",
        "search": "BMW - 330i",
        "md": "330I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 335",
        "md": "335"
      },
      {
        "mk": "BMW",
        "search": "BMW - 335Xi",
        "md": "335X"
      },
      {
        "mk": "BMW",
        "search": "BMW - 335d",
        "md": "335D"
      },
      {
        "mk": "BMW",
        "search": "BMW - 335i",
        "md": "335I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 428i",
        "md": "428I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 430i",
        "md": "430I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 435i",
        "md": "435I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 440i",
        "md": "440I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 520",
        "md": "520"
      },
      {
        "mk": "BMW",
        "search": "BMW - 524 SERIES",
        "md": "524"
      },
      {
        "mk": "BMW",
        "search": "BMW - 525i",
        "md": "525I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 525ia",
        "md": "525"
      },
      {
        "mk": "BMW",
        "search": "BMW - 528i",
        "md": "528i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 530i",
        "md": "530i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 533i",
        "md": "533i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 535 SERIES",
        "md": "535"
      },
      {
        "mk": "BMW",
        "search": "BMW - 540",
        "md": "540"
      },
      {
        "mk": "BMW",
        "search": "BMW - 540i",
        "md": "540I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 545i",
        "md": "545I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 550",
        "md": "550"
      },
      {
        "mk": "BMW",
        "search": "BMW - 600",
        "md": "600"
      },
      {
        "mk": "BMW",
        "search": "BMW - 630csi",
        "md": "630"
      },
      {
        "mk": "BMW",
        "search": "BMW - 633csi",
        "md": "633"
      },
      {
        "mk": "BMW",
        "search": "BMW - 635 SERIES",
        "md": "635"
      },
      {
        "mk": "BMW",
        "search": "BMW - 645ci",
        "md": "645C"
      },
      {
        "mk": "BMW",
        "search": "BMW - 645i",
        "md": "645I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 650 SERIES",
        "md": "650"
      },
      {
        "mk": "BMW",
        "search": "BMW - 733 SERIES",
        "md": "733"
      },
      {
        "mk": "BMW",
        "search": "BMW - 735 SERIES",
        "md": "735"
      },
      {
        "mk": "BMW",
        "search": "BMW - 740",
        "md": "740"
      },
      {
        "mk": "BMW",
        "search": "BMW - 740i",
        "md": "740i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 745i",
        "md": "745i"
      },
      {
        "mk": "BMW",
        "search": "BMW - 750",
        "md": "750"
      },
      {
        "mk": "BMW",
        "search": "BMW - 750il",
        "md": "750I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 750li",
        "md": "750L"
      },
      {
        "mk": "BMW",
        "search": "BMW - 760i",
        "md": "760I"
      },
      {
        "mk": "BMW",
        "search": "BMW - 760li",
        "md": "760L"
      },
      {
        "mk": "BMW",
        "search": "BMW - 840ci",
        "md": "840"
      },
      {
        "mk": "BMW",
        "search": "BMW - 850ci",
        "md": "850C"
      },
      {
        "mk": "BMW",
        "search": "BMW - 850i",
        "md": "850"
      },
      {
        "mk": "BMW",
        "search": "BMW - BAVARIA",
        "md": "BAVA"
      },
      {
        "mk": "BMW",
        "search": "BMW - I3",
        "md": "I3"
      },
      {
        "mk": "BMW",
        "search": "BMW - ISETTA",
        "md": "ISLE"
      },
      {
        "mk": "BMW",
        "search": "BMW - L6",
        "md": "L6"
      },
      {
        "mk": "BMW",
        "search": "BMW - L7",
        "md": "L7"
      },
      {
        "mk": "BMW",
        "search": "BMW - M235i",
        "md": "M235"
      },
      {
        "mk": "BMW",
        "search": "BMW - M3",
        "md": "M3"
      },
      {
        "mk": "BMW",
        "search": "BMW - M4",
        "md": "M4"
      },
      {
        "mk": "BMW",
        "search": "BMW - M5",
        "md": "M5"
      },
      {
        "mk": "BMW",
        "search": "BMW - M6",
        "md": "M6"
      },
      {
        "mk": "BMW",
        "search": "BMW - TI",
        "md": "TI"
      },
      {
        "mk": "BMW",
        "search": "BMW - X1",
        "md": "X1"
      },
      {
        "mk": "BMW",
        "search": "BMW - X2",
        "md": "X2"
      },
      {
        "mk": "BMW",
        "search": "BMW - X3",
        "md": "X3"
      },
      {
        "mk": "BMW",
        "search": "BMW - X4",
        "md": "X4"
      },
      {
        "mk": "BMW",
        "search": "BMW - X5",
        "md": "X5"
      },
      {
        "mk": "BMW",
        "search": "BMW - X6",
        "md": "X6"
      },
      {
        "mk": "BMW",
        "search": "BMW - Z3",
        "md": "Z3"
      },
      {
        "mk": "BMW",
        "search": "BMW - Z4",
        "md": "Z4"
      },
      {
        "mk": "BMW",
        "search": "BMW - i8",
        "md": "I8"
      },
      {
        "mk": "BOBB",
        "search": "BOBBI-KAR - ",
        "md": ""
      },
      {
        "mk": "BOCA",
        "search": "BOCAR - ",
        "md": ""
      },
      {
        "mk": "BOM",
        "search": "BOMBARDIER - ",
        "md": ""
      },
      {
        "mk": "BONA",
        "search": "BONAIR LEISURE PRODUCTS LTD. - ",
        "md": ""
      },
      {
        "mk": "BOND",
        "search": "BOND - ",
        "md": ""
      },
      {
        "mk": "BORG",
        "search": "BORGWARD - BEL AIR",
        "md": "BELA"
      },
      {
        "mk": "BORG",
        "search": "BORGWARD - BERETTA",
        "md": "BERE"
      },
      {
        "mk": "BORG",
        "search": "BORGWARD - BISCAYNE",
        "md": "BISC"
      },
      {
        "mk": "BORG",
        "search": "BORGWARD - HANSA",
        "md": "HANS"
      },
      {
        "mk": "BORG",
        "search": "BORGWARD - ISABELLA",
        "md": "ISAB"
      },
      {
        "mk": "BOS",
        "search": "BOSTON WHALER - ",
        "md": ""
      },
      {
        "mk": "BRDL",
        "search": "BRADLEY GT - ",
        "md": ""
      },
      {
        "mk": "BRAS",
        "search": "BRASINCA - ",
        "md": ""
      },
      {
        "mk": "BREM",
        "search": "BREMEN SPORT EQUIPMENT - CREIGHTON",
        "md": "CREI"
      },
      {
        "mk": "BREM",
        "search": "BREMEN SPORT EQUIPMENT - LAUFER",
        "md": "LAUF"
      },
      {
        "mk": "BREM",
        "search": "BREMEN SPORT EQUIPMENT - MAXI-TAXI",
        "md": "MAXI"
      },
      {
        "mk": "BREM",
        "search": "BREMEN SPORT EQUIPMENT - MINI-MARK",
        "md": "MINI"
      },
      {
        "mk": "BREM",
        "search": "BREMEN SPORT EQUIPMENT - SEBRING",
        "md": "SEBR"
      },
      {
        "mk": "BRIC",
        "search": "BRICKLIN - ",
        "md": ""
      },
      {
        "mk": "BRIS",
        "search": "BRISTOL - ",
        "md": ""
      },
      {
        "mk": "BROD",
        "search": "BRODEX - ",
        "md": ""
      },
      {
        "mk": "BUEL",
        "search": "BUELL - ",
        "md": ""
      },
      {
        "mk": "BUGA",
        "search": "BUGATTI - EB110",
        "md": "E10"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ALLURE",
        "md": "ALLU"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - APOLLO",
        "md": "APOL"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - CALIFORNIA",
        "md": "CALI"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - CENTURION",
        "md": "CENU"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - CENTURY",
        "md": "CENT"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ELECTRA (PARK AVENUE)",
        "md": "ELEC"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ENCLAVE",
        "md": "ENCL"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ENCORE",
        "md": "ENCO"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ESTATE WAGON",
        "md": "ESTA"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - GRAND SPORTS (G.S.)",
        "md": "GRAN"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - GS350",
        "md": "G35"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - GS400",
        "md": "G40"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - GS455",
        "md": "G45"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - INVICTA",
        "md": "INVI"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - LE SABRE",
        "md": "LESA"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - LIMITED",
        "md": "LIMI"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - PARK AVENUE",
        "md": "PARK"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - RAINIER",
        "md": "RAIN"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - REATTA",
        "md": "REAT"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - REGAL",
        "md": "REGA"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - RENDEZVOUS",
        "md": "REND"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - RIVIERA",
        "md": "RIVI"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - ROADMASTER",
        "md": "ROAD"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SKYHAWK",
        "md": "SKYH"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SKYLARK",
        "md": "SKYL"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SOMERSET",
        "md": "SOME"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SPECIAL",
        "md": "SPEC"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SPORTSWAGON",
        "md": "SPOR"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - SUPER",
        "md": "SUPE"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - TERRAZA",
        "md": "TERR"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - VERANO",
        "md": "VERA"
      },
      {
        "mk": "BUIC",
        "search": "BUICK - WILDCAT",
        "md": "WILD"
      },
      {
        "mk": "BUTT",
        "search": "BUTTERFIELD MUSKETEER - ",
        "md": ""
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - DUMP TRAILER",
        "md": "DUTR"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - FLAT TRAILER",
        "md": "FLTR"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - GOOSENECK TRAILER",
        "md": "GOTR"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - LANDSCAPE TRAILER",
        "md": "LATR"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - PINTLE PULL TRAILER",
        "md": "PITR"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - TILT TRAILER",
        "md": "TILT"
      },
      {
        "mk": "CBTR",
        "search": "C & B TRAILER - UTILITY TRAILER",
        "md": "UTTR"
      },
      {
        "mk": "CHR",
        "search": "C-HR - ",
        "md": ""
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - 60 SERIES",
        "md": "60"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - 61 SERIES",
        "md": "61"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - 62 SERIES",
        "md": "62"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - 75 SERIES",
        "md": "75"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - ALLANTE",
        "md": "ALLA"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - ATS",
        "md": "ATS"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - BROUGHAM",
        "md": "BROU"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - CALAIS",
        "md": "CALA"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - CATERA",
        "md": "CATE"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - CIMARRON",
        "md": "CIMA"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - CONCOURS",
        "md": "CONC"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - CTS",
        "md": "CTS"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - DEVILLE",
        "md": "DEVI"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - DTS",
        "md": "DTS"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - ELDORADO",
        "md": "ELDO"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - ESCALADE",
        "md": "ESCA"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - ESV",
        "md": "ESV"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - EXT",
        "md": "EXT"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - FLEETWOOD",
        "md": "FLEE"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - SEVILLE",
        "md": "SEVI"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - SRX",
        "md": "SRX"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - STS",
        "md": "STS"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - TOURING SEDAN",
        "md": "TOUR"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - XLR",
        "md": "XLR"
      },
      {
        "mk": "CADI",
        "search": "CADILLAC - XT5",
        "md": "XT5"
      },
      {
        "mk": "CAM",
        "search": "CAMPION - ",
        "md": ""
      },
      {
        "mk": "CAPR",
        "search": "CAPRI - ",
        "md": ""
      },
      {
        "mk": "CASE",
        "search": "CASE - ",
        "md": ""
      },
      {
        "mk": "CATE",
        "search": "CATERPILLAR - ",
        "md": ""
      },
      {
        "mk": "CHAI",
        "search": "CHAIKA - ",
        "md": ""
      },
      {
        "mk": "CHA",
        "search": "CHAMPION - ",
        "md": ""
      },
      {
        "mk": "CHEC",
        "search": "CHECKER - AEROBUS",
        "md": "AERO"
      },
      {
        "mk": "CHEC",
        "search": "CHECKER - CUSTOM",
        "md": "CUST"
      },
      {
        "mk": "CHEC",
        "search": "CHECKER - MARATHON",
        "md": "MARA"
      },
      {
        "mk": "CHEC",
        "search": "CHECKER - SUPERBA",
        "md": "SUPE"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - 300 DELUXE",
        "md": "300"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - ASTRO VAN",
        "md": "ASTR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - AVALANCHE",
        "md": "AVAL"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - AVEO",
        "md": "AVEO"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BEL AIR",
        "md": "BELA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BERETTA",
        "md": "BERE"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BISCAYNE",
        "md": "BISC"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BLAZER",
        "md": "BLAZ"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BOLT",
        "md": "BOLT"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - BROOKWOOD",
        "md": "BROO"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - C/K 1500",
        "md": "C15"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - C/K 2500",
        "md": "C25"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - C/K 3500",
        "md": "C35"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - C10",
        "md": "C10"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CAMARO",
        "md": "CAMA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CAPRICE",
        "md": "CAPR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CAPTIVA",
        "md": "CAPT"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CAVALIER",
        "md": "CAVA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CELEBRITY",
        "md": "CELE"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CHEVELLE",
        "md": "CHEV"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CHEVETTE",
        "md": "CHET"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CHEVY II",
        "md": "CHEY"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CITATION",
        "md": "CITA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CITY EXPRESS",
        "md": "CITY"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - COBALT",
        "md": "COBA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - COLORADO",
        "md": "COLO"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CONCOURS",
        "md": "CONC"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CORSICA",
        "md": "CORS"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CORVAIR",
        "md": "CORR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CORVETTE",
        "md": "CORV"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - CRUZE",
        "md": "CRUZ"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - DEL RAY",
        "md": "DELR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - DELUXE (CHEVELLE)",
        "md": "CHED"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - EL CAMINO",
        "md": "ELCA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - EPICA",
        "md": "EPIC"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - EQUINOX",
        "md": "EQUI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - ESTATE WAGON",
        "md": "EST"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - EXPRESS",
        "md": "EXP"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - FLEETLINE",
        "md": "FLE"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - G30",
        "md": "G30"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - GREENBRIER (CHEVELLE)",
        "md": "CHEG"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - HHR",
        "md": "HHR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - IMPALA",
        "md": "IMPA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - KINGSWOOD",
        "md": "KIN"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - LUMINA",
        "md": "LUMI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - LUMINA APV",
        "md": "LUMA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - LUV",
        "md": "LUV"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - MALIBU",
        "md": "MALI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - METRO",
        "md": "METR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - MONTE CARLO",
        "md": "MONT"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - MONZA",
        "md": "MONZ"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - NOMAD (CHEVELLE)",
        "md": "CHEN"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - NOVA (CHEVY II & CONCOURS)",
        "md": "NOVA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - OPTRA",
        "md": "OPTR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - OPTRA5",
        "md": "OPT5"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - ORLANDO",
        "md": "ORLA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - PARKWOOD",
        "md": "PARK"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - PRISM",
        "md": "PRIS"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - S10",
        "md": "S10"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SILVERADO",
        "md": "SILV"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SONIC",
        "md": "SONI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SPARK",
        "md": "SPRK"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SPECTRUM",
        "md": "SPEC"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SPORTVAN",
        "md": "SPOR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SPRINT",
        "md": "SPRI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SSR",
        "md": "SSR"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - STYLE LINE",
        "md": "STY"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - STYLE MASTER",
        "md": "STM"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - SUBURBAN",
        "md": "SUBU"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TAHOE",
        "md": "TAHO"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TOWNSMAN",
        "md": "TOWN"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TRACKER",
        "md": "TRAC"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TRAILBLAZER",
        "md": "TRAI"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TRAVERSE",
        "md": "TRAV"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - TRAX",
        "md": "TRAX"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - UPLANDER",
        "md": "UPLA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - VEGA",
        "md": "VEGA"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - VENTURE",
        "md": "VENT"
      },
      {
        "mk": "CHEV",
        "search": "CHEVROLET - VOLT",
        "md": "VOLT"
      },
      {
        "mk": "CHIN",
        "search": "CHING-KAN-SHAN - ",
        "md": ""
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - 200",
        "md": "200"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - 300",
        "md": "300"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - 300C",
        "md": "300C"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - CIRRUS",
        "md": "CIRR"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - COMMANDER",
        "md": "COMM"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - CONCORDE",
        "md": "CONC"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - CONQUEST",
        "md": "CONQ"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - CORDOBA",
        "md": "CORD"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - CROSSFIRE",
        "md": "CROS"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - DAYTONA",
        "md": "DAYT"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - DYNASTY",
        "md": "DYNA"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - E CLASS",
        "md": "ECL"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - EXECUTIVE SEDAN",
        "md": "EXE"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - FIFTH AVENUE",
        "md": "NEW5"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - IMPERIAL",
        "md": "IMPE"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - INTREPID",
        "md": "INTR"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - LASER",
        "md": "LASE"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - LEBARON",
        "md": "LEBA"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - LHS",
        "md": "LHS"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - LIDO",
        "md": "LID"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - LIMOUSINE",
        "md": "LIMO"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - NEON",
        "md": "NEON"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - NEW YORKER",
        "md": "NEWY"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - NEWPORT",
        "md": "NEWP"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - PACIFICA",
        "md": "PACI"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - PROWLER",
        "md": "PROW"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - PT CRUISER",
        "md": "PTCR"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - ROYAL",
        "md": "ROYA"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - SALON",
        "md": "SAL"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - SARATOGA",
        "md": "SARA"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - SEBRING",
        "md": "SEBR"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - TC",
        "md": "TC"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - TOWN & COUNTRY",
        "md": "NEWT"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - TOWN AND COUNTRY MINIVAN",
        "md": "TNC"
      },
      {
        "mk": "CHRY",
        "search": "CHRYSLER - WINDSOR",
        "md": "WIN"
      },
      {
        "mk": "CISI",
        "search": "CISITALIA - ",
        "md": ""
      },
      {
        "mk": "CITI",
        "search": "CITICAR (ELECTRIC CAR) - ",
        "md": ""
      },
      {
        "mk": "CITR",
        "search": "CITROEN - 2CV",
        "md": "2CV"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - AM16",
        "md": "AM6"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - AX",
        "md": "AX"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - DS-19",
        "md": "D19"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - DS-21 & D21",
        "md": "D21"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - ID-19",
        "md": "ID9"
      },
      {
        "mk": "CITR",
        "search": "CITROEN - SM",
        "md": "SM"
      },
      {
        "mk": "CITY",
        "search": "CITY EXPRESS - ",
        "md": ""
      },
      {
        "mk": "CLAI",
        "search": "CLASSIC MOTOR CARRIAGES INC. - ",
        "md": ""
      },
      {
        "mk": "CLAC",
        "search": "CLASSIC ROADSTERS LTD. - ",
        "md": ""
      },
      {
        "mk": "CLEN",
        "search": "CLENET COACH WORKS - ROADSTER",
        "md": "ROA"
      },
      {
        "mk": "CLUA",
        "search": "CLUA - ",
        "md": ""
      },
      {
        "mk": "COMV",
        "search": "COMMUTER VEHICLES INC - COMUTA-CAR",
        "md": "COM"
      },
      {
        "mk": "COCP",
        "search": "CONCEPTOR INDUSTRIES INC - ",
        "md": ""
      },
      {
        "mk": "CONN",
        "search": "CONNAUGHT - ",
        "md": ""
      },
      {
        "mk": "CONS",
        "search": "CONSULIER - ",
        "md": ""
      },
      {
        "mk": "CONT",
        "search": "CONTESSA - ",
        "md": ""
      },
      {
        "mk": "CNTL",
        "search": "CONTINENTAL - CARGO",
        "md": "CARG"
      },
      {
        "mk": "CORD",
        "search": "CORD - ",
        "md": ""
      },
      {
        "mk": "CRI",
        "search": "CRISCRAFT - ",
        "md": ""
      },
      {
        "mk": "CROF",
        "search": "CROFTON CUB - ",
        "md": ""
      },
      {
        "mk": "CROS",
        "search": "CROSLEY - ",
        "md": ""
      },
      {
        "mk": "CUBS",
        "search": "CUBSTER - ",
        "md": ""
      },
      {
        "mk": "CUNN",
        "search": "CUNNINGHAM - ",
        "md": ""
      },
      {
        "mk": "DAIN",
        "search": "D & A VEHICLES INC. - ",
        "md": ""
      },
      {
        "mk": "DB",
        "search": "D.B. - ",
        "md": ""
      },
      {
        "mk": "DAEW",
        "search": "DAEWOO - LANOS",
        "md": "LAN"
      },
      {
        "mk": "DAEW",
        "search": "DAEWOO - LEGANZA",
        "md": "LEG"
      },
      {
        "mk": "DAEW",
        "search": "DAEWOO - NUBIRA",
        "md": "NUB"
      },
      {
        "mk": "DAF",
        "search": "DAF - ",
        "md": ""
      },
      {
        "mk": "DAIH",
        "search": "DAIHATSU - CHARADE",
        "md": "CHA"
      },
      {
        "mk": "DAIH",
        "search": "DAIHATSU - ROCKY",
        "md": "RKY"
      },
      {
        "mk": "DAIM",
        "search": "DAIMLER - ",
        "md": ""
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 110",
        "md": "110"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 1200",
        "md": "120"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 200SX",
        "md": "200S"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 210 (or B-210)",
        "md": "210"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 240Z",
        "md": "240Z"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 260Z",
        "md": "260Z"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 280Z",
        "md": "280Z"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 280ZX",
        "md": "280X"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 310",
        "md": "310"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 311",
        "md": "311"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 510",
        "md": "510"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 610",
        "md": "610"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 710",
        "md": "710"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - 810",
        "md": "810"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - B-210 (or 210)",
        "md": "B210"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - F-10",
        "md": "F10"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - HONEY BEE",
        "md": "HON"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - LIL HUSTLER",
        "md": "LIL"
      },
      {
        "mk": "DATS",
        "search": "DATSUN - MAXIMA",
        "md": "MAXI"
      },
      {
        "mk": "DAVI",
        "search": "DAVIS - ",
        "md": ""
      },
      {
        "mk": "DAYT",
        "search": "DAYTONA - MIGI",
        "md": "MIG"
      },
      {
        "mk": "DAYT",
        "search": "DAYTONA - MOYA",
        "md": "MOY"
      },
      {
        "mk": "DELO",
        "search": "DE LOREAN - ",
        "md": ""
      },
      {
        "mk": "DEBO",
        "search": "DEBONAIR - ",
        "md": ""
      },
      {
        "mk": "DECO",
        "search": "DECOURVILLE - ROADSTER",
        "md": "ROA"
      },
      {
        "mk": "DEEP",
        "search": "DEEP SANDERSON - ",
        "md": ""
      },
      {
        "mk": "DELL",
        "search": "DELLOW - ",
        "md": ""
      },
      {
        "mk": "DENZ",
        "search": "DENZEL - ",
        "md": ""
      },
      {
        "mk": "DESO",
        "search": "DESOTO - ADVENTURER",
        "md": "ADV"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - FIREDOM",
        "md": "FRD"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - FIRELITE",
        "md": "FRF"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - FIRESWEEP",
        "md": "FRS"
      },
      {
        "mk": "DESO",
        "search": "DESOTO - POWERMASTER",
        "md": "POW"
      },
      {
        "mk": "DETO",
        "search": "DETOMASO - DEAUVILLE",
        "md": "DEA"
      },
      {
        "mk": "DETO",
        "search": "DETOMASO - LONGCHAMP",
        "md": "LON"
      },
      {
        "mk": "DETO",
        "search": "DETOMASO - MANGUSTA",
        "md": "MNA"
      },
      {
        "mk": "DETO",
        "search": "DETOMASO - PANTERA",
        "md": "PTA"
      },
      {
        "mk": "DITE",
        "search": "DI TELLA - ",
        "md": ""
      },
      {
        "mk": "DIVA",
        "search": "DIVA - ",
        "md": ""
      },
      {
        "mk": "DKW",
        "search": "DKW - AUDI",
        "md": "AUD"
      },
      {
        "mk": "DKW",
        "search": "DKW - F102",
        "md": "102"
      },
      {
        "mk": "DKW",
        "search": "DKW - VEMAG",
        "md": "VEM"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 2000",
        "md": "2000"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 330 SERIES",
        "md": "330"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 400 SERIES",
        "md": "400"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 440 SERIES",
        "md": "440"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 600",
        "md": "600"
      },
      {
        "mk": "DODG",
        "search": "DODGE - 880 SERIES",
        "md": "880"
      },
      {
        "mk": "DODG",
        "search": "DODGE - A 100 COMPACT",
        "md": "100"
      },
      {
        "mk": "DODG",
        "search": "DODGE - ARIES",
        "md": "ARIE"
      },
      {
        "mk": "DODG",
        "search": "DODGE - ASPEN",
        "md": "ASPE"
      },
      {
        "mk": "DODG",
        "search": "DODGE - AVENGER",
        "md": "AVEN"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CALIBER",
        "md": "CALI"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CARAVAN",
        "md": "CARA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CHALLENGER",
        "md": "CHAL"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CHARGER",
        "md": "CHAR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - COLT",
        "md": "COLT"
      },
      {
        "mk": "DODG",
        "search": "DODGE - COMPACT SPORTSMAN",
        "md": "COM"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CONQUEST",
        "md": "CONQ"
      },
      {
        "mk": "DODG",
        "search": "DODGE - CORONET",
        "md": "CORO"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DAKOTA",
        "md": "DAKO"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DART",
        "md": "DART"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DAYTONA",
        "md": "DAYT"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DEMON",
        "md": "DEM"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DIPLOMAT",
        "md": "DIPL"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DURANGO",
        "md": "DURA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - DYNASTY",
        "md": "DYNA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - FLEET SPECIAL",
        "md": "FLS"
      },
      {
        "mk": "DODG",
        "search": "DODGE - GRAND CARAVAN",
        "md": "GRAN"
      },
      {
        "mk": "DODG",
        "search": "DODGE - INTREPID",
        "md": "INTR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - JOURNEY",
        "md": "JOUR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - LANCER",
        "md": "LANC"
      },
      {
        "mk": "DODG",
        "search": "DODGE - MAGNUM",
        "md": "MAGN"
      },
      {
        "mk": "DODG",
        "search": "DODGE - MEADOWBROOK",
        "md": "MEAD"
      },
      {
        "mk": "DODG",
        "search": "DODGE - MIRADA",
        "md": "MIRA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - MONACO",
        "md": "MONA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - NEON",
        "md": "NEON"
      },
      {
        "mk": "DODG",
        "search": "DODGE - NITRO",
        "md": "NITR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - OMNI (ALSO 024)",
        "md": "OMNI"
      },
      {
        "mk": "DODG",
        "search": "DODGE - PHOENIX",
        "md": "PHOE"
      },
      {
        "mk": "DODG",
        "search": "DODGE - PIONEER",
        "md": "PION"
      },
      {
        "mk": "DODG",
        "search": "DODGE - POLARA",
        "md": "POLA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - POWER RAM",
        "md": "PRM"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAIDER",
        "md": "RAID"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 1500 PU",
        "md": "D150"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 1500 VAN",
        "md": "V15"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 2500 PU",
        "md": "D250"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 2500 VAN",
        "md": "V25"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 3500 PU",
        "md": "D350"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM 3500 VAN",
        "md": "V35"
      },
      {
        "mk": "DODG",
        "search": "DODGE - RAM CHARGER",
        "md": "RCH"
      },
      {
        "mk": "DODG",
        "search": "DODGE - ROYAL",
        "md": "ROYA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SENECA",
        "md": "SENE"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SHADOW",
        "md": "SHAD"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SPIRIT",
        "md": "SPIR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SPRINT",
        "md": "SPRI"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SPRINTER",
        "md": "SPRT"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SRT4",
        "md": "SRT4"
      },
      {
        "mk": "DODG",
        "search": "DODGE - ST. REGIS",
        "md": "STR"
      },
      {
        "mk": "DODG",
        "search": "DODGE - STRATUS",
        "md": "STRA"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SX",
        "md": "SX"
      },
      {
        "mk": "DODG",
        "search": "DODGE - SX2.0",
        "md": "SX2"
      },
      {
        "mk": "DODG",
        "search": "DODGE - VIPER",
        "md": "VIPE"
      },
      {
        "mk": "DODG",
        "search": "DODGE - WAYFARER",
        "md": "WAY"
      },
      {
        "mk": "DONG",
        "search": "DONG FENG  (EAST WIND) - ",
        "md": ""
      },
      {
        "mk": "DBL",
        "search": "DOUBLE EAGLE - ",
        "md": ""
      },
      {
        "mk": "DUCA",
        "search": "DUCATI - ",
        "md": ""
      },
      {
        "mk": "DUEL",
        "search": "DUEL - ",
        "md": ""
      },
      {
        "mk": "DUES",
        "search": "DUESENBERG - ",
        "md": ""
      },
      {
        "mk": "DURA",
        "search": "DURANT - ",
        "md": ""
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - AEROLITE",
        "md": "AERO"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - ASPEN TRAIL",
        "md": "ASPE"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - BAYRIDGE",
        "md": "BAYR"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - BRECKENRIDGE",
        "md": "BREC"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - COLEMAN",
        "md": "COLE"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - DENALI",
        "md": "DENA"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - DUTCHMAN",
        "md": "DUTC"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - INFINITY",
        "md": "INFI"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - KODIAK",
        "md": "KODI"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - KOMFORT",
        "md": "KOMF"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - RUBICON",
        "md": "RUBI"
      },
      {
        "mk": "DUTC",
        "search": "DUTCHMAN MANUFACTURING INC. - VOLTAGE",
        "md": "VOLT"
      },
      {
        "mk": "EAGL",
        "search": "EAGLE - MEDALLION",
        "md": "MEDA"
      },
      {
        "mk": "EAGL",
        "search": "EAGLE - PREMIER",
        "md": "PRE"
      },
      {
        "mk": "EAGL",
        "search": "EAGLE - SUMMIT",
        "md": "SUM"
      },
      {
        "mk": "EAGL",
        "search": "EAGLE - TALON",
        "md": "TALO"
      },
      {
        "mk": "EAGL",
        "search": "EAGLE - VISION",
        "md": "VISI"
      },
      {
        "mk": "EDSE",
        "search": "EDSEL - CITATION",
        "md": "CITA"
      },
      {
        "mk": "EDSE",
        "search": "EDSEL - CORSAIR",
        "md": "CORS"
      },
      {
        "mk": "EDSE",
        "search": "EDSEL - PACER",
        "md": "PACE"
      },
      {
        "mk": "EDSE",
        "search": "EDSEL - RANGER",
        "md": "RANG"
      },
      {
        "mk": "EDSE",
        "search": "EDSEL - VILLAGER",
        "md": "VILL"
      },
      {
        "mk": "ELVC",
        "search": "ELECTRIC VEHICLE CORP. - ",
        "md": ""
      },
      {
        "mk": "ELVA",
        "search": "ELVA - ",
        "md": ""
      },
      {
        "mk": "EMW",
        "search": "EMW - ",
        "md": ""
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - 100 E SERIES",
        "md": "100"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - 105 E SERIES",
        "md": "105"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - ANGLIA",
        "md": "ANG"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - CAPRI",
        "md": "CAPR"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - CONSUL",
        "md": "CONS"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - CORSAIR",
        "md": "CORS"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - CORTINA",
        "md": "CORT"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - ESCORT",
        "md": "ESCO"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - GT",
        "md": "GT"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - LOTUS",
        "md": "LOTU"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - MARK II",
        "md": "MK2"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - PERFECT",
        "md": "PER"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - SQUIRE",
        "md": "SQU"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - THAMES",
        "md": "THA"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - ZEPHYR",
        "md": "ZEPH"
      },
      {
        "mk": "ENGF",
        "search": "ENGLISH FORD (BRITISH) - ZODIAC",
        "md": "ZODI"
      },
      {
        "mk": "ENVO",
        "search": "ENVOY - EPIC",
        "md": "EPI"
      },
      {
        "mk": "ENZM",
        "search": "ENZMANN - ",
        "md": ""
      },
      {
        "mk": "ERSK",
        "search": "ERSKINE - ",
        "md": ""
      },
      {
        "mk": "ESCO",
        "search": "ESCORT BOAT TRAILER MFG. - ",
        "md": ""
      },
      {
        "mk": "ESHL",
        "search": "ESHELMAN SPORTABOUT - ",
        "md": ""
      },
      {
        "mk": "ESSE",
        "search": "ESSEX - ",
        "md": ""
      },
      {
        "mk": "EVRY",
        "search": "EVERYBODYS MOTOR CAR MFG. - ",
        "md": ""
      },
      {
        "mk": "EXCA",
        "search": "EXCALIBUR - COBRA",
        "md": "COBR"
      },
      {
        "mk": "EXCA",
        "search": "EXCALIBUR - JAC 427 COBRA",
        "md": "JAC"
      },
      {
        "mk": "EXCA",
        "search": "EXCALIBUR - SS PHAETON",
        "md": "SSP"
      },
      {
        "mk": "EXCA",
        "search": "EXCALIBUR - SS ROADSTER",
        "md": "SSR"
      },
      {
        "mk": "EXCA",
        "search": "EXCALIBUR - SSK",
        "md": "SSK"
      },
      {
        "mk": "EZLO",
        "search": "EZ LOADER BOAT TRAILERS INC. - ",
        "md": ""
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - EXCELLENCE",
        "md": "EXE"
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - FACEL II",
        "md": "FII"
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - FACEL III",
        "md": "FIII"
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - FACELLIA",
        "md": "FACE"
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - FV",
        "md": "FV"
      },
      {
        "mk": "FACE",
        "search": "FACEL VEGA - HK500",
        "md": "500"
      },
      {
        "mk": "FAIR",
        "search": "FAIRTHORPE - ",
        "md": ""
      },
      {
        "mk": "FALC",
        "search": "FALCON (BRITISH) - ",
        "md": ""
      },
      {
        "mk": "FELB",
        "search": "FELBER - ",
        "md": ""
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 206",
        "md": "206"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 208",
        "md": "208"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 308",
        "md": "308"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 328",
        "md": "328"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 348",
        "md": "348"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 456GT",
        "md": "456"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 458",
        "md": "458"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - 512",
        "md": "512"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - BARCHETTA (OR F130)",
        "md": "BAR"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - DAYTONA",
        "md": "DAYT"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - F-550 MARANELLO",
        "md": "MAR"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - F12 BERLINETTA",
        "md": "F12B"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - F355",
        "md": "F35"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - F40",
        "md": "F40"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - F430",
        "md": "F430"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - MONDIAL",
        "md": "MON"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - QUATTROVALVOLVE",
        "md": "QUA"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - TESTAROSSA",
        "md": "TEST"
      },
      {
        "mk": "FERR",
        "search": "FERRARI - TIPO",
        "md": "TIP"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 1100 - D or R",
        "md": "110"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 1200",
        "md": "120"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 124 SERIES",
        "md": "124"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 128 SERIES",
        "md": "128"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 131 SERIES",
        "md": "131"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 1500",
        "md": "150"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 500",
        "md": "500"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 600D",
        "md": "600"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 750",
        "md": "750"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - 850 FASTBACK",
        "md": "85F"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - BRAVA",
        "md": "BRAV"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - PUNTO",
        "md": "PUNT"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - RIMTO",
        "md": "RIM"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - SPIDER SERIES",
        "md": "SPYD"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - STRADA",
        "md": "STRA"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - UNO",
        "md": "UNO"
      },
      {
        "mk": "FIAT",
        "search": "FIAT - X19",
        "md": "X19"
      },
      {
        "mk": "FIAA",
        "search": "FIAT-ABARTH - ",
        "md": ""
      },
      {
        "mk": "FIBE",
        "search": "FIBERFAB INC. (MINNEAPOLIS MN) - ",
        "md": ""
      },
      {
        "mk": "FIES",
        "search": "FIESTA (IMPORTED BY FORD) - ",
        "md": ""
      },
      {
        "mk": "FISK",
        "search": "FISKER - KARMA",
        "md": "KARM"
      },
      {
        "mk": "FLEE",
        "search": "FLEETWOOD ENTERPRISES INC - TERRY",
        "md": "TERR"
      },
      {
        "mk": "FLYE",
        "search": "FLYER - BUS",
        "md": "BUS"
      },
      {
        "mk": "FNM",
        "search": "FNM - ",
        "md": ""
      },
      {
        "mk": "FORD",
        "search": "FORD - 300 SERIES",
        "md": "300"
      },
      {
        "mk": "FORD",
        "search": "FORD - 7 LITRE",
        "md": "7LR"
      },
      {
        "mk": "FORD",
        "search": "FORD - AEROSTAR",
        "md": "AERO"
      },
      {
        "mk": "FORD",
        "search": "FORD - ASPIRE",
        "md": "ASPI"
      },
      {
        "mk": "FORD",
        "search": "FORD - BRONCO/BRONCO II",
        "md": "BRON"
      },
      {
        "mk": "FORD",
        "search": "FORD - C-MAX",
        "md": "CMAX"
      },
      {
        "mk": "FORD",
        "search": "FORD - CLUB WAGON E150",
        "md": "CW1"
      },
      {
        "mk": "FORD",
        "search": "FORD - CLUB WAGON E250",
        "md": "CW2"
      },
      {
        "mk": "FORD",
        "search": "FORD - CLUB WAGON E350",
        "md": "CW3"
      },
      {
        "mk": "FORD",
        "search": "FORD - COBRA",
        "md": "COBR"
      },
      {
        "mk": "FORD",
        "search": "FORD - CONTOUR",
        "md": "CONT"
      },
      {
        "mk": "FORD",
        "search": "FORD - COUNTRY SEDAN",
        "md": "COY"
      },
      {
        "mk": "FORD",
        "search": "FORD - COUNTRY SQUIRE",
        "md": "COQ"
      },
      {
        "mk": "FORD",
        "search": "FORD - CRESTLINE",
        "md": "CRE"
      },
      {
        "mk": "FORD",
        "search": "FORD - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "FORD",
        "search": "FORD - CUSTOMLINE",
        "md": "CST"
      },
      {
        "mk": "FORD",
        "search": "FORD - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "FORD",
        "search": "FORD - ECONOLINE 100",
        "md": "E100"
      },
      {
        "mk": "FORD",
        "search": "FORD - ECONOLINE E150",
        "md": "E150"
      },
      {
        "mk": "FORD",
        "search": "FORD - ECONOLINE E250",
        "md": "E250"
      },
      {
        "mk": "FORD",
        "search": "FORD - ECONOLINE E350",
        "md": "E350"
      },
      {
        "mk": "FORD",
        "search": "FORD - ECONOLINE SERIES",
        "md": "ECON"
      },
      {
        "mk": "FORD",
        "search": "FORD - EDGE",
        "md": "EDGE"
      },
      {
        "mk": "FORD",
        "search": "FORD - ELITE",
        "md": "ELIT"
      },
      {
        "mk": "FORD",
        "search": "FORD - ESCAPE",
        "md": "ESCA"
      },
      {
        "mk": "FORD",
        "search": "FORD - ESCORT",
        "md": "ESCO"
      },
      {
        "mk": "FORD",
        "search": "FORD - EXCURSION",
        "md": "EXCU"
      },
      {
        "mk": "FORD",
        "search": "FORD - EXP",
        "md": "EXP"
      },
      {
        "mk": "FORD",
        "search": "FORD - EXPEDITION",
        "md": "EXPE"
      },
      {
        "mk": "FORD",
        "search": "FORD - EXPLORER",
        "md": "EXPL"
      },
      {
        "mk": "FORD",
        "search": "FORD - F-150XLT",
        "md": "F150"
      },
      {
        "mk": "FORD",
        "search": "FORD - F100",
        "md": "F100"
      },
      {
        "mk": "FORD",
        "search": "FORD - F250 SUPERCAB (TRUCK)",
        "md": "F250"
      },
      {
        "mk": "FORD",
        "search": "FORD - F350",
        "md": "F350"
      },
      {
        "mk": "FORD",
        "search": "FORD - F450",
        "md": "F450"
      },
      {
        "mk": "FORD",
        "search": "FORD - F550",
        "md": "F550"
      },
      {
        "mk": "FORD",
        "search": "FORD - FAIRLANE",
        "md": "FAIL"
      },
      {
        "mk": "FORD",
        "search": "FORD - FAIRMONT",
        "md": "FAIR"
      },
      {
        "mk": "FORD",
        "search": "FORD - FALCON",
        "md": "FALC"
      },
      {
        "mk": "FORD",
        "search": "FORD - FESTIVA",
        "md": "FEST"
      },
      {
        "mk": "FORD",
        "search": "FORD - FIESTA",
        "md": "FIES"
      },
      {
        "mk": "FORD",
        "search": "FORD - FIVE HUNDRED",
        "md": "FIVE"
      },
      {
        "mk": "FORD",
        "search": "FORD - FLEX",
        "md": "FLEX"
      },
      {
        "mk": "FORD",
        "search": "FORD - FOCUS",
        "md": "FOCU"
      },
      {
        "mk": "FORD",
        "search": "FORD - FREESTAR",
        "md": "FREE"
      },
      {
        "mk": "FORD",
        "search": "FORD - FREESTYLE",
        "md": "FRES"
      },
      {
        "mk": "FORD",
        "search": "FORD - FRONTENAC",
        "md": "FRO"
      },
      {
        "mk": "FORD",
        "search": "FORD - FUSION",
        "md": "FUSI"
      },
      {
        "mk": "FORD",
        "search": "FORD - FUTURA",
        "md": "FUTU"
      },
      {
        "mk": "FORD",
        "search": "FORD - GALAXIE",
        "md": "GALA"
      },
      {
        "mk": "FORD",
        "search": "FORD - GRANADA",
        "md": "GRAN"
      },
      {
        "mk": "FORD",
        "search": "FORD - GRAND MARQUIS",
        "md": "GRA"
      },
      {
        "mk": "FORD",
        "search": "FORD - KA",
        "md": "KA"
      },
      {
        "mk": "FORD",
        "search": "FORD - LARIAT",
        "md": "LARI"
      },
      {
        "mk": "FORD",
        "search": "FORD - LASER",
        "md": "LASE"
      },
      {
        "mk": "FORD",
        "search": "FORD - LTD",
        "md": "LTD"
      },
      {
        "mk": "FORD",
        "search": "FORD - LTD II",
        "md": "LTII"
      },
      {
        "mk": "FORD",
        "search": "FORD - MAINLINE",
        "md": "MAIN"
      },
      {
        "mk": "FORD",
        "search": "FORD - MAVERICK",
        "md": "MAVE"
      },
      {
        "mk": "FORD",
        "search": "FORD - MODEL A",
        "md": "MOA"
      },
      {
        "mk": "FORD",
        "search": "FORD - MODEL T",
        "md": "MOT"
      },
      {
        "mk": "FORD",
        "search": "FORD - MUSTANG",
        "md": "MUST"
      },
      {
        "mk": "FORD",
        "search": "FORD - NEVADA",
        "md": "NEVA"
      },
      {
        "mk": "FORD",
        "search": "FORD - PINTO",
        "md": "PINT"
      },
      {
        "mk": "FORD",
        "search": "FORD - PROBE",
        "md": "PROB"
      },
      {
        "mk": "FORD",
        "search": "FORD - RANCH",
        "md": "RAH"
      },
      {
        "mk": "FORD",
        "search": "FORD - RANCH WAGON",
        "md": "RAW"
      },
      {
        "mk": "FORD",
        "search": "FORD - RANCHERO",
        "md": "RANC"
      },
      {
        "mk": "FORD",
        "search": "FORD - RANGER",
        "md": "RANG"
      },
      {
        "mk": "FORD",
        "search": "FORD - SPECIAL",
        "md": "SPE"
      },
      {
        "mk": "FORD",
        "search": "FORD - SQUIRE (FALCON OR FAIRLANE)",
        "md": "SQU"
      },
      {
        "mk": "FORD",
        "search": "FORD - STARLINER",
        "md": "STA"
      },
      {
        "mk": "FORD",
        "search": "FORD - SUNLINER",
        "md": "SUN"
      },
      {
        "mk": "FORD",
        "search": "FORD - SUPER",
        "md": "SUP"
      },
      {
        "mk": "FORD",
        "search": "FORD - TAURUS",
        "md": "TAUR"
      },
      {
        "mk": "FORD",
        "search": "FORD - TEMPO",
        "md": "TEMP"
      },
      {
        "mk": "FORD",
        "search": "FORD - THUNDERBIRD",
        "md": "THUN"
      },
      {
        "mk": "FORD",
        "search": "FORD - TORINO (FAIRLANE)",
        "md": "TORI"
      },
      {
        "mk": "FORD",
        "search": "FORD - TRANSIT",
        "md": "TRAN"
      },
      {
        "mk": "FORD",
        "search": "FORD - VICTORIA",
        "md": "CROW"
      },
      {
        "mk": "FORD",
        "search": "FORD - WINDSTAR",
        "md": "WIND"
      },
      {
        "mk": "FORD",
        "search": "FORD - XL",
        "md": "XL"
      },
      {
        "mk": "FOUN",
        "search": "FOUNTAIN - ",
        "md": ""
      },
      {
        "mk": "FRAN",
        "search": "FRANKLIN - ",
        "md": ""
      },
      {
        "mk": "FRNA",
        "search": "FRAZER-NASH - ",
        "md": ""
      },
      {
        "mk": "FRAZ",
        "search": "FRAZIER - ",
        "md": ""
      },
      {
        "mk": "FREI",
        "search": "FREIGHTLINER - ",
        "md": ""
      },
      {
        "mk": "FREF",
        "search": "FRENCH FORD - COMETE",
        "md": "COM"
      },
      {
        "mk": "FREF",
        "search": "FRENCH FORD - VEDETTE",
        "md": "VED"
      },
      {
        "mk": "FREF",
        "search": "FRENCH FORD - VENDOME",
        "md": "VEN"
      },
      {
        "mk": "FRIS",
        "search": "FRISKY - ",
        "md": ""
      },
      {
        "mk": "GAZ",
        "search": "GAZ - CHAIKA",
        "md": "CHA"
      },
      {
        "mk": "GAZ",
        "search": "GAZ - VOLGA",
        "md": "VOL"
      },
      {
        "mk": "GZL",
        "search": "GAZELLE - ",
        "md": ""
      },
      {
        "mk": "GM",
        "search": "GENERAL MOTORS - EV1",
        "md": "EV1"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - 3500HD",
        "md": "3500"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - ACADIA",
        "md": "ACAD"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - CABELLERO",
        "md": "CAB"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - CANYON",
        "md": "CANY"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - DENALI",
        "md": "DEN"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - ENVOY",
        "md": "ENVO"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - JIMMY",
        "md": "JIMM"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - RALLY",
        "md": "RALL"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SAFARI",
        "md": "SAFA"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SAVANNA",
        "md": "SAVA"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SIERRA",
        "md": "SIER"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SONOMA",
        "md": "SONO"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SPRINT",
        "md": "SPRI"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - SUBURBAN",
        "md": "SUBU"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - TERRAIN",
        "md": "TERR"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - TRACKER",
        "md": "TRAC"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - TYPHOON",
        "md": "TYP"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - VANDURA",
        "md": "VAND"
      },
      {
        "mk": "GMC",
        "search": "GENERAL MOTORS CORP. - YUKON",
        "md": "YUKO"
      },
      {
        "mk": "GENE",
        "search": "GENESIS - G70",
        "md": "G70"
      },
      {
        "mk": "GENE",
        "search": "GENESIS - G80",
        "md": "G80"
      },
      {
        "mk": "GENE",
        "search": "GENESIS - G80 Sport",
        "md": "G80S"
      },
      {
        "mk": "GENE",
        "search": "GENESIS - G90",
        "md": "G90"
      },
      {
        "mk": "GEO",
        "search": "GEO - METRO",
        "md": "METR"
      },
      {
        "mk": "GEO",
        "search": "GEO - PRIZM",
        "md": "PRIZ"
      },
      {
        "mk": "GEO",
        "search": "GEO - STORM",
        "md": "STRO"
      },
      {
        "mk": "GEO",
        "search": "GEO - TRACKER",
        "md": "TRAC"
      },
      {
        "mk": "GIAN",
        "search": "GIANNINI - ",
        "md": ""
      },
      {
        "mk": "GILB",
        "search": "GILBERN - ",
        "md": ""
      },
      {
        "mk": "GINE",
        "search": "GINETTA - ",
        "md": ""
      },
      {
        "mk": "GITA",
        "search": "GITANE - ",
        "md": ""
      },
      {
        "mk": "GLAS",
        "search": "GLAS - GOGGOMOBILE",
        "md": "GOG"
      },
      {
        "mk": "GLSC",
        "search": "GLASSIC - ",
        "md": ""
      },
      {
        "mk": "GOLI",
        "search": "GOLIATH - ",
        "md": ""
      },
      {
        "mk": "GORD",
        "search": "GORDON - ",
        "md": ""
      },
      {
        "mk": "GRAC",
        "search": "GRACIELA - ",
        "md": ""
      },
      {
        "mk": "GRAH",
        "search": "GRAHAM - ",
        "md": ""
      },
      {
        "mk": "GRAP",
        "search": "GRAHAM-PAIGE - ",
        "md": ""
      },
      {
        "mk": "GDNE",
        "search": "GREAT DANE - DRY VAN",
        "md": "DV"
      },
      {
        "mk": "GDNE",
        "search": "GREAT DANE - FLATBED",
        "md": "FLBD"
      },
      {
        "mk": "GDNE",
        "search": "GREAT DANE - REEFER VAN",
        "md": "RFRV"
      },
      {
        "mk": "GRIF",
        "search": "GRIFFITH - ",
        "md": ""
      },
      {
        "mk": "GSM",
        "search": "GSM - ",
        "md": ""
      },
      {
        "mk": "HAN",
        "search": "HANS CHRISTIAN - ",
        "md": ""
      },
      {
        "mk": "HAR",
        "search": "HARBORCRAFT - ",
        "md": ""
      },
      {
        "mk": "HARL",
        "search": "HARLEY DAVIDSON - ",
        "md": ""
      },
      {
        "mk": "HARM",
        "search": "HARMON TANK CO. INC. - ",
        "md": ""
      },
      {
        "mk": "HAUL",
        "search": "HAULMARK - ",
        "md": ""
      },
      {
        "mk": "HEIN",
        "search": "HEINKEL - ",
        "md": ""
      },
      {
        "mk": "HENR",
        "search": "HENRY J. - ",
        "md": ""
      },
      {
        "mk": "HICK",
        "search": "HICKEY TRAIL-BLAZER - ",
        "md": ""
      },
      {
        "mk": "HIGH",
        "search": "HIGHLINER - ",
        "md": ""
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - 1600 SERIES",
        "md": "160"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - HUSKY",
        "md": "HUS"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - IMP",
        "md": "IMP"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - MINX",
        "md": "MIN"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - SCEPTRE",
        "md": "SCP"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - SNIPE",
        "md": "SNI"
      },
      {
        "mk": "HILL",
        "search": "HILLMAN - SUPER MINX",
        "md": "SUP"
      },
      {
        "mk": "HIND",
        "search": "HINDUSTAN - ",
        "md": ""
      },
      {
        "mk": "HINO",
        "search": "HINO - ",
        "md": ""
      },
      {
        "mk": "HOB",
        "search": "HOBIE CAT - ",
        "md": ""
      },
      {
        "mk": "HOLD",
        "search": "HOLDEN - ",
        "md": ""
      },
      {
        "mk": "HOND",
        "search": "HONDA - ACCORD",
        "md": "ACCO"
      },
      {
        "mk": "HOND",
        "search": "HONDA - CIVIC (AND CRX)",
        "md": "CIVI"
      },
      {
        "mk": "HOND",
        "search": "HONDA - CR-Z",
        "md": "CR-Z"
      },
      {
        "mk": "HOND",
        "search": "HONDA - CROSSTOUR",
        "md": "CROS"
      },
      {
        "mk": "HOND",
        "search": "HONDA - CRV",
        "md": "CRV"
      },
      {
        "mk": "HOND",
        "search": "HONDA - DEL SOL",
        "md": "DELS"
      },
      {
        "mk": "HOND",
        "search": "HONDA - ELEMENT",
        "md": "ELEM"
      },
      {
        "mk": "HOND",
        "search": "HONDA - EVPLUS",
        "md": "EVP"
      },
      {
        "mk": "HOND",
        "search": "HONDA - FIT",
        "md": "FIT"
      },
      {
        "mk": "HOND",
        "search": "HONDA - HR-V",
        "md": "HRV"
      },
      {
        "mk": "HOND",
        "search": "HONDA - INSIGHT",
        "md": "INSI"
      },
      {
        "mk": "HOND",
        "search": "HONDA - ODYSSEY",
        "md": "ODYS"
      },
      {
        "mk": "HOND",
        "search": "HONDA - PASSPORT",
        "md": "PASS"
      },
      {
        "mk": "HOND",
        "search": "HONDA - PILOT",
        "md": "PILO"
      },
      {
        "mk": "HOND",
        "search": "HONDA - PRELUDE",
        "md": "PREL"
      },
      {
        "mk": "HOND",
        "search": "HONDA - RIDGELINE",
        "md": "RIDG"
      },
      {
        "mk": "HOND",
        "search": "HONDA - S2000",
        "md": "S200"
      },
      {
        "mk": "HONG",
        "search": "HONGKI OR HONG-CHI - ",
        "md": ""
      },
      {
        "mk": "HORC",
        "search": "HORCH LIMOUSINE - ",
        "md": ""
      },
      {
        "mk": "HOTC",
        "search": "HOTCHKISS - ",
        "md": ""
      },
      {
        "mk": "HRG",
        "search": "HRG - ",
        "md": ""
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - COMMODORE",
        "md": "COM"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - HORNET",
        "md": "HOR"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - ITALIA",
        "md": "ITA"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - JET",
        "md": "JET"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - PACEMAKER",
        "md": "PAC"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - RAMBLER",
        "md": "RAM"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - SUPER",
        "md": "SUP"
      },
      {
        "mk": "HUDS",
        "search": "HUDSON - WASP",
        "md": "WAS"
      },
      {
        "mk": "HUME",
        "search": "HUMBEE SURREY - ",
        "md": ""
      },
      {
        "mk": "HUMB",
        "search": "HUMBER - HAWK",
        "md": "HAW"
      },
      {
        "mk": "HUMB",
        "search": "HUMBER - SNIPE",
        "md": "SNI"
      },
      {
        "mk": "HUMM",
        "search": "HUMMER - H1",
        "md": "H1"
      },
      {
        "mk": "HUMM",
        "search": "HUMMER - H2",
        "md": "H2"
      },
      {
        "mk": "HUMM",
        "search": "HUMMER - H2 SUT",
        "md": "H2SU"
      },
      {
        "mk": "HUMM",
        "search": "HUMMER - H3",
        "md": "H3"
      },
      {
        "mk": "HUPM",
        "search": "HUPMOBILE - ",
        "md": ""
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - ACCENT",
        "md": "ACCE"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - AVATAR",
        "md": "AVAT"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - AZERA",
        "md": "AZER"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - ELANTRA",
        "md": "ELAN"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - ENTOURAGE",
        "md": "ENTO"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - EXCEL",
        "md": "EXCE"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - GENESIS",
        "md": "GENE"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - IONIQ",
        "md": "ION"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - KONA",
        "md": "KONA"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - MARCIA",
        "md": "MAR"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - NIRO",
        "md": "NIRO"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - PONY",
        "md": "PONY"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - SANTA FE",
        "md": "SANT"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - SCOUPE",
        "md": "SCOU"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - SONATA",
        "md": "SONA"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - STELLAR",
        "md": "STEL"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - TIBURON",
        "md": "TIBU"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - TUCSON",
        "md": "TUCS"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - VELOSTER",
        "md": "VELO"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - XG300",
        "md": "XG30"
      },
      {
        "mk": "HYUN",
        "search": "HYUNDAI - XG350",
        "md": "XG35"
      },
      {
        "mk": "IAME",
        "search": "I.A.M.E. - ",
        "md": ""
      },
      {
        "mk": "IKA",
        "search": "I.K.A. - ",
        "md": ""
      },
      {
        "mk": "IMPB",
        "search": "I.M.P. (U.S.) - ",
        "md": ""
      },
      {
        "mk": "IMPE",
        "search": "IMPERIAL - CROWN",
        "md": "CROW"
      },
      {
        "mk": "IMPE",
        "search": "IMPERIAL - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "IMPE",
        "search": "IMPERIAL - LE BARON",
        "md": "LEBA"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - EX35",
        "md": "EX35"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - FX35",
        "md": "FX35"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - FX45",
        "md": "FX45"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - FX50",
        "md": "FX50"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - G20",
        "md": "G20"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - G35",
        "md": "G35"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - G37",
        "md": "G37"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - G37X",
        "md": "G37X"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - I30",
        "md": "I30"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - I35",
        "md": "I35"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - J30",
        "md": "J30"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - M30",
        "md": "M30"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - M35",
        "md": "M35"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - M45",
        "md": "M45"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - Q45",
        "md": "Q45"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - Q50",
        "md": "Q50"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - Q60",
        "md": "Q60"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - Q70L",
        "md": "Q70L"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - QX4",
        "md": "QX4"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - QX50",
        "md": "QX50"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - QX56",
        "md": "QX56"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - QX60",
        "md": "QX60"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - QX80",
        "md": "QX80"
      },
      {
        "mk": "INFI",
        "search": "INFINITI - XQ80",
        "md": "XQ80"
      },
      {
        "mk": "INNO",
        "search": "INNOCENTI - ",
        "md": ""
      },
      {
        "mk": "INME",
        "search": "INTERMECCANICA - ",
        "md": ""
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 1652sc",
        "md": "1652"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 3200",
        "md": "3200"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 3800",
        "md": "3800"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 4200",
        "md": "4200"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 4300",
        "md": "4300"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 4400",
        "md": "4400"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 7300",
        "md": "7300"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 7400",
        "md": "7400"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 8500",
        "md": "8500"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 8600",
        "md": "8600"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 9200i",
        "md": "9200"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 9400i",
        "md": "9400"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 9900i",
        "md": "9900"
      },
      {
        "mk": "INTE",
        "search": "INTERNATIONAL - 9900ix",
        "md": "9999"
      },
      {
        "mk": "ISET",
        "search": "ISETTA - ",
        "md": ""
      },
      {
        "mk": "ISO",
        "search": "ISO - ",
        "md": ""
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - AMIGO",
        "md": "AMG"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - HOMBRE",
        "md": "HOM"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - I-MARK",
        "md": "IMA"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - IMPULSE",
        "md": "IMPU"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - OASIS",
        "md": "OAS"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - RODEO",
        "md": "RODE"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - STYLUS",
        "md": "STYL"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - TROOPER",
        "md": "TROO"
      },
      {
        "mk": "ISUZ",
        "search": "ISUZU - VEHICROSS",
        "md": "VCS"
      },
      {
        "mk": "ITAI",
        "search": "ITALIA - ",
        "md": ""
      },
      {
        "mk": "ITAF",
        "search": "ITALIAN FORD - ANGLIA",
        "md": "ANG"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 2.4 LITRE",
        "md": "24L"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 3.4 LITRE",
        "md": "34L"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 3.8 LITRE",
        "md": "38L"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 340",
        "md": "340"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 4.2 LITRE",
        "md": "42L"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - 420",
        "md": "420"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - E-PAC",
        "md": "EPAC"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - E-TYPE",
        "md": "ETY"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - F-PAC",
        "md": "FPAC"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - F-TYPE",
        "md": "FTYP"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - I-PAC",
        "md": "IPAC"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - MARK TEN SALON",
        "md": "MTS"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - MARK V SERIES",
        "md": "MAR"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - S-TYPE",
        "md": "STYP"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - SOVEREIGN",
        "md": "SOV"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - V12",
        "md": "V12"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - VANDEN PLAS",
        "md": "VAN"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XE",
        "md": "XE"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XF",
        "md": "XF"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJ",
        "md": "XJ"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJ12",
        "md": "J12"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJ40",
        "md": "XJ4"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJ6",
        "md": "XJ6"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJ8",
        "md": "XJ8"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJC",
        "md": "XJC"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJR",
        "md": "XJR"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XJS",
        "md": "XJS"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XK SERIES",
        "md": "XK"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XK-E SERIES",
        "md": "XKE"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XK8",
        "md": "XK8"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XTYPE",
        "md": "XTYP"
      },
      {
        "mk": "JAGU",
        "search": "JAGUAR - XVLR",
        "md": "XVLR"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - CHEROKEE/GRAND CHEROKEE",
        "md": "CHER"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - CJ",
        "md": "CJ"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - COMANCHE",
        "md": "COMA"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - COMMANDER",
        "md": "COMM"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - COMPASS",
        "md": "COMP"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - DAKAR",
        "md": "DAKA"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - GLADIATOR",
        "md": "GLAD"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - J-10",
        "md": "J10"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - LIBERTY",
        "md": "LIBE"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - PATRIOT",
        "md": "PATR"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - RENEGADE",
        "md": "RENE"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - TJ",
        "md": "TJ"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - WAGONEER",
        "md": "WAGO"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - WRANGLER",
        "md": "WRAN"
      },
      {
        "mk": "JEEP",
        "search": "JEEP - YJ",
        "md": "YJ"
      },
      {
        "mk": "JENS",
        "search": "JENSEN - HEALY",
        "md": "HEAL"
      },
      {
        "mk": "JENS",
        "search": "JENSEN - INTERCEPTOR",
        "md": "INTE"
      },
      {
        "mk": "JETM",
        "search": "JETMOBILE - ",
        "md": ""
      },
      {
        "mk": "JOHN",
        "search": "JOHN DEERE - ",
        "md": ""
      },
      {
        "mk": "JOWE",
        "search": "JOWETT - ",
        "md": ""
      },
      {
        "mk": "KLIN",
        "search": "K-LINE - ",
        "md": ""
      },
      {
        "mk": "KAIS",
        "search": "KAISER - CAROLINA",
        "md": "CARO"
      },
      {
        "mk": "KAIS",
        "search": "KAISER - DARRIN",
        "md": "DAR"
      },
      {
        "mk": "KAIS",
        "search": "KAISER - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "KAIS",
        "search": "KAISER - DRAGON",
        "md": "DRA"
      },
      {
        "mk": "KAIS",
        "search": "KAISER - MANHATTAN",
        "md": "MAN"
      },
      {
        "mk": "KAWA",
        "search": "KAWASAKI - ",
        "md": ""
      },
      {
        "mk": "KENW",
        "search": "KENWORTH - ",
        "md": ""
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - AMANTI",
        "md": "AMAN"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - AVELLA",
        "md": "AVE"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - CADENZA",
        "md": "CAD"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - FORTE",
        "md": "FORT"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - K900",
        "md": "K900"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - MAGENTIS",
        "md": "MAGE"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - MATIZ",
        "md": "MATI"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - NIRO",
        "md": "NIRO"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - OPTIMA",
        "md": "OPT"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - RIO",
        "md": "RIO"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - RIO5",
        "md": "RIO5"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - RONDO",
        "md": "ROND"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SEDONA",
        "md": "SEDO"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SEPHIA",
        "md": "SEPH"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SORENTO",
        "md": "SORE"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SOUL",
        "md": "SOUL"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SPECTRA",
        "md": "SPEC"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - SPORTAGE",
        "md": "SPOR"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - STINGER",
        "md": "STIN"
      },
      {
        "mk": "KIA",
        "search": "KIA MOTORS CORPORATION - TELLURIDE",
        "md": "TELL"
      },
      {
        "mk": "KIMI",
        "search": "KING MIDGET - ",
        "md": ""
      },
      {
        "mk": "KIOT",
        "search": "KIOTI - CK",
        "md": "CK"
      },
      {
        "mk": "KIOT",
        "search": "KIOTI - DK",
        "md": "DK"
      },
      {
        "mk": "KNIG",
        "search": "KNIGHT - ",
        "md": ""
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - B",
        "md": "B"
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - BX",
        "md": "BX"
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - L",
        "md": "L"
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - M",
        "md": "M"
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - RTV",
        "md": "RTV"
      },
      {
        "mk": "KUBO",
        "search": "KUBOTA - TLB",
        "md": "TLB"
      },
      {
        "mk": "KURT",
        "search": "KURTIS KRAFT - ",
        "md": ""
      },
      {
        "mk": "LADA",
        "search": "LADA - NIVA",
        "md": "NIV"
      },
      {
        "mk": "LAGO",
        "search": "LAGONDA - ",
        "md": ""
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - COUNTACH",
        "md": "COUN"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - DIABLO",
        "md": "DIAB"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - ESPADA",
        "md": "ESP"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - GALLARDO",
        "md": "GALL"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - HURACAN",
        "md": "HURA"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - JALPA",
        "md": "JAL"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - JARMA",
        "md": "JAR"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - LM129",
        "md": "129"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - MIURA SV",
        "md": "MIU"
      },
      {
        "mk": "LAMO",
        "search": "LAMBORGHINI - ROADSTER",
        "md": "ROD"
      },
      {
        "mk": "LAMB",
        "search": "LAMBRETTA - ",
        "md": ""
      },
      {
        "mk": "LANC",
        "search": "LANCHESTER - ",
        "md": ""
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - BERLINA",
        "md": "BER"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - BETA SERIES",
        "md": "BET"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - DEDRA",
        "md": "DED"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - FLAMINIA",
        "md": "FLM"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - FLAVIA",
        "md": "FLA"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - FULVIA",
        "md": "FUL"
      },
      {
        "mk": "LNCI",
        "search": "LANCIA - ZAGATO",
        "md": "ZAG"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - DEFENDER 110",
        "md": "D110"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - DEFENDER 90",
        "md": "D90"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - DEFENDER SERIES",
        "md": "DEFE"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - FREELANDER",
        "md": "FREE"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - HSE",
        "md": "HSE"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - LR2",
        "md": "LR2"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - LR3",
        "md": "LR3"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - LR4",
        "md": "LR4"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER",
        "md": "RANG"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER DISCOVERY",
        "md": "DISC"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER DISCOVERY SPORT",
        "md": "DISS"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER EVOQUE",
        "md": "EVOQ"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER SPORT",
        "md": "SPOR"
      },
      {
        "mk": "LAND",
        "search": "LAND ROVER - RANGE ROVER VELAR",
        "md": "VELR"
      },
      {
        "mk": "LALL",
        "search": "LASALLE - ",
        "md": ""
      },
      {
        "mk": "LASE",
        "search": "LASER - ",
        "md": ""
      },
      {
        "mk": "LEAF",
        "search": "LEA-FRANCIS - ",
        "md": ""
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - CT200H",
        "md": "CT20"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - ES250",
        "md": "250"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - ES300",
        "md": "300"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - ES330",
        "md": "ES33"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - ES350",
        "md": "350"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GS300",
        "md": "GS3"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GS350",
        "md": "GS35"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GS400",
        "md": "GS4"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GS430",
        "md": "GS43"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GS450",
        "md": "GS45"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GSF",
        "md": "GSF"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GX460",
        "md": "GX46"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - GX470",
        "md": "GX47"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - IS200T",
        "md": "IS20"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - IS250",
        "md": "IS25"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - IS300",
        "md": "IS30"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - IS350",
        "md": "IS35"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - ISF",
        "md": "ISF"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LS400",
        "md": "400"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LS430",
        "md": "LS43"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LS460",
        "md": "LS46"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LS460L",
        "md": "LS4L"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LS600HL",
        "md": "LS60"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LX450",
        "md": "L45"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LX470",
        "md": "L47"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - LX570",
        "md": "L57"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - NX",
        "md": "NX"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - NX300",
        "md": "NX30"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RC300",
        "md": "RC30"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RC350",
        "md": "RC35"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RCF",
        "md": "RCF"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RX300",
        "md": "RX3"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RX330",
        "md": "RX33"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RX350",
        "md": "RX35"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RX400H",
        "md": "RX40"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - RX450H",
        "md": "RX45"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - SC300",
        "md": "S30"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - SC400",
        "md": "S40"
      },
      {
        "mk": "LEXU",
        "search": "LEXUS - SC430",
        "md": "SC43"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - AVIATOR",
        "md": "AVIA"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - CONTINENTAL",
        "md": "CONT"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - LS",
        "md": "LS"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - LS6",
        "md": "LS6"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - LS8",
        "md": "LS8"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK II",
        "md": "MII"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK III",
        "md": "MIII"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK IV",
        "md": "MIV"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK SERIES",
        "md": "MARK"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK V",
        "md": "MV"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK VI",
        "md": "MVI"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK VII",
        "md": "MVII"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MARK VIII",
        "md": "VIII"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MKC",
        "md": "MKC"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MKT",
        "md": "MKT"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MKX",
        "md": "MKX"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - MKZ",
        "md": "MKZ"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - NAUTILUS",
        "md": "NAUT"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - NAVIGATOR",
        "md": "NAVI"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - PREMIERE",
        "md": "PRE"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - STANDARD",
        "md": "STAN"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - TOWN CAR",
        "md": "TOWN"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - VERSAILLES",
        "md": "VER"
      },
      {
        "mk": "LINC",
        "search": "LINCOLN-CONTINENTAL - ZEPHYR",
        "md": "ZEP"
      },
      {
        "mk": "LLOY",
        "search": "LLOYD - ",
        "md": ""
      },
      {
        "mk": "LDTR",
        "search": "LOAD TRAIL - DK",
        "md": "DK"
      },
      {
        "mk": "LOCO",
        "search": "LOCOMOBILE - ",
        "md": ""
      },
      {
        "mk": "LOLA",
        "search": "LOLA - ",
        "md": ""
      },
      {
        "mk": "LOND",
        "search": "LONDON MOTORS - ",
        "md": ""
      },
      {
        "mk": "LONE",
        "search": "LONESTAR - ",
        "md": ""
      },
      {
        "mk": "LOOD",
        "search": "LOODCRAFT - ",
        "md": ""
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - ECLAT",
        "md": "ECL"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - ELAN",
        "md": "ELA"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - ELITE",
        "md": "ELI"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - ESPRIT",
        "md": "ESPI"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - EUROPA",
        "md": "EUR"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - PLUS TWO",
        "md": "PLU"
      },
      {
        "mk": "LOTU",
        "search": "LOTUS - SUPER 7",
        "md": "SUP"
      },
      {
        "mk": "MBM",
        "search": "M.B.M. - ",
        "md": ""
      },
      {
        "mk": "MACK",
        "search": "MACK - ",
        "md": ""
      },
      {
        "mk": "MAL",
        "search": "MALIBU - ",
        "md": ""
      },
      {
        "mk": "MANA",
        "search": "MANAC - ",
        "md": ""
      },
      {
        "mk": "MARC",
        "search": "MARCOS - ",
        "md": ""
      },
      {
        "mk": "MARM",
        "search": "MARMON - ",
        "md": ""
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 2000 SERIES",
        "md": "200"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 228",
        "md": "228"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 3500 SERIES",
        "md": "350"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 4000 SERIES",
        "md": "400"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 4200 GT",
        "md": "420"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 425",
        "md": "425"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 430",
        "md": "430"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - 5000 SERIES",
        "md": "500"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - BITURBO",
        "md": "BIT"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - BORA",
        "md": "BOR"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - GHIBLI",
        "md": "GHI"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - GTI SERIES",
        "md": "GTI"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - INDY",
        "md": "IND"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - KHAMSIN",
        "md": "KHA"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - MERAK",
        "md": "MER"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - MEXICO",
        "md": "MEX"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - MISTRELL",
        "md": "MIS"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - QUATTROPORTE",
        "md": "QUA"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - SEBRING",
        "md": "SEB"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - SHAMAL",
        "md": "SHM"
      },
      {
        "mk": "MASE",
        "search": "MASERATI - SPYDER",
        "md": "SPY"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 1500",
        "md": "1500"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 3400",
        "md": "3400"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 3600",
        "md": "3600"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 500",
        "md": "500"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 5400",
        "md": "5400"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 6400",
        "md": "6400"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 7400",
        "md": "7400"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - 8400",
        "md": "8400"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - GC",
        "md": "GC"
      },
      {
        "mk": "MASS",
        "search": "MASSEY FERGUSON - SUNFLOWER",
        "md": "SUNF"
      },
      {
        "mk": "MAS",
        "search": "MASTERCRAFT - ",
        "md": ""
      },
      {
        "mk": "MATR",
        "search": "MATRA - ",
        "md": ""
      },
      {
        "mk": "MAXL",
        "search": "MAXWELL - ",
        "md": ""
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 2",
        "md": "2"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 3",
        "md": "3"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 323",
        "md": "323"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 5",
        "md": "5"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 6",
        "md": "6"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 616",
        "md": "616"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 618",
        "md": "618"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 626",
        "md": "626"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 808 SERIES",
        "md": "808"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - 929",
        "md": "929"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B2000",
        "md": "B200"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B2200",
        "md": "B220"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B2300",
        "md": "B230"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B2500",
        "md": "B250"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B2600",
        "md": "B260"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B3000",
        "md": "B300"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - B4000",
        "md": "B400"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - COSMO",
        "md": "CSM"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - CX-3",
        "md": "CX3"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - CX-5",
        "md": "CX5"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - CX-7",
        "md": "CX7"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - CX-9",
        "md": "CX9"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - FAMILIA",
        "md": "PRO"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - GLC",
        "md": "GLC"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - M6",
        "md": "M6"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MIATA",
        "md": "MIAT"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MILLENIA",
        "md": "MILE"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MISER",
        "md": "MISE"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MPV",
        "md": "MPV"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MX3",
        "md": "MX3"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MX5",
        "md": "MX5"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - MX6",
        "md": "MX6"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - NAVAJO",
        "md": "NAVA"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - PROTEGE",
        "md": "PROT"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - RX2 (ROTARY ENGINE)",
        "md": "RX2"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - RX3 (ROTARY ENGINE)",
        "md": "RX3"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - RX4 (ROTARY ENGINE)",
        "md": "RX4"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - RX7 (ROTARY ENGINE)",
        "md": "RX7"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - RX8",
        "md": "RX8"
      },
      {
        "mk": "MAZD",
        "search": "MAZDA - TRIBUTE",
        "md": "TRIB"
      },
      {
        "mk": "MBCC",
        "search": "MCBURNIE COACH CRAFT INC. - ",
        "md": ""
      },
      {
        "mk": "MCLA",
        "search": "MCLAREN - MP4",
        "md": "MP4"
      },
      {
        "mk": "MEAN",
        "search": "MEAN - ",
        "md": ""
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 180 SERIES",
        "md": "180"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 190 SERIES",
        "md": "190"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 200 SERIES",
        "md": "200"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 219 SERIES",
        "md": "219"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 220 SERIES",
        "md": "220"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 230 SERIES",
        "md": "230"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 240 SERIES",
        "md": "240"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 250 SERIES",
        "md": "250"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 260 SERIES",
        "md": "260"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 280 SERIES",
        "md": "280"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 300 SERIES",
        "md": "300"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 320 SERIES",
        "md": "320"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 350 SERIES",
        "md": "350"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 380 SERIES",
        "md": "380"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 400 SERIES",
        "md": "400"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 420 SERIES",
        "md": "420"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 450 SERIES",
        "md": "450"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 500 SERIES",
        "md": "500"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 560 SERIES",
        "md": "560"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - 600 SERIES",
        "md": "600"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - B200",
        "md": "B200"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - B250",
        "md": "B250"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C220",
        "md": "C220"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C230",
        "md": "C230"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C240",
        "md": "C240"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C250",
        "md": "C250"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C280",
        "md": "C280"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C300",
        "md": "C300"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C320",
        "md": "C320"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C350",
        "md": "C350"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C36",
        "md": "C36"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C400",
        "md": "C400"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C55",
        "md": "C55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - C63",
        "md": "C63"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CL500",
        "md": "CL50"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CL55",
        "md": "CL55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CL600",
        "md": "CL60"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CL65",
        "md": "CL65"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLA250",
        "md": "CLA2"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLA45",
        "md": "CLA4"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK32",
        "md": "CK32"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK320",
        "md": "CLK3"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK35",
        "md": "CK35"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK430",
        "md": "CL4"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK50",
        "md": "CK50"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK500",
        "md": "CLK5"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLK55",
        "md": "CK55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLS500",
        "md": "CLS5"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLS55",
        "md": "CS55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - CLS63",
        "md": "CLS6"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E300",
        "md": "E300"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E320",
        "md": "E320"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E320W",
        "md": "320W"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E350",
        "md": "E350"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E400",
        "md": "E400"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E420",
        "md": "E420"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E43",
        "md": "E43"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E430",
        "md": "E430"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E500",
        "md": "E500"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E55",
        "md": "E55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - E63",
        "md": "E63"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - G500",
        "md": "G500"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - G55",
        "md": "G55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - G550",
        "md": "G550"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - G63",
        "md": "G63"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - G65",
        "md": "G65"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GL350",
        "md": "GL35"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLA",
        "md": "GLA"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLC30",
        "md": "GL30"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLC43",
        "md": "GL43"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLE35",
        "md": "GLE3"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLE350",
        "md": "G350"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLE400",
        "md": "G400"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLE45",
        "md": "GLE4"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLK250",
        "md": "GLK2"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLK35",
        "md": "G35"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLK350",
        "md": "GLK3"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLK450",
        "md": "G450"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - GLS550",
        "md": "GLS5"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - METRIS",
        "md": "METR"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - ML320 (SPORT UTILITY)",
        "md": "ML3"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - ML350",
        "md": "ML35"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - ML430",
        "md": "ML4"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - ML500",
        "md": "ML50"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - ML63",
        "md": "ML63"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - R350",
        "md": "R350"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S430",
        "md": "S430"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S450",
        "md": "S450"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S500",
        "md": "S500"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S55",
        "md": "S55"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S550V",
        "md": "S550"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - S600",
        "md": "S600"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SL",
        "md": "SL"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SL500",
        "md": "SL5"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SL600",
        "md": "SL6"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SL65",
        "md": "SL65"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SLK3",
        "md": "SLK3"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SLK5",
        "md": "SLK5"
      },
      {
        "mk": "MERZ",
        "search": "MERCEDES-BENZ - SPRINTER",
        "md": "SPRI"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - BOBCAT",
        "md": "BOBC"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - BREEZEWAY",
        "md": "BREE"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - BROUGHAM",
        "md": "BROU"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - CALIENTE",
        "md": "CLI"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - CAPRI",
        "md": "CAPR"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - COLONY PARK",
        "md": "COL"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - COMET",
        "md": "COME"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - COMMUTER",
        "md": "CMM"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - COUGAR",
        "md": "COUG"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - COUNTRY CRUISER",
        "md": "CCR"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - CYCLONE",
        "md": "CYC"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - GRAND MARQUIS",
        "md": "GRAN"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - LN7",
        "md": "LN7"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - LYNX",
        "md": "LYNX"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MARAUDER",
        "md": "MARA"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MARINER",
        "md": "MARI"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MARQUIS",
        "md": "MARQ"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MEDALIST",
        "md": "MED"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MONARCH",
        "md": "MONA"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MONTCLAIR",
        "md": "MOT"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MONTEGO",
        "md": "MONT"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MONTEREY",
        "md": "MONY"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MOUNTAINEER",
        "md": "MTN"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - MYSTIQUE",
        "md": "MYST"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - PARKLANE",
        "md": "PARK"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - S-22",
        "md": "S22"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - S-33",
        "md": "S33"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - S-55",
        "md": "S55"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - SABLE",
        "md": "SABL"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - TOPAZ",
        "md": "TOPA"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - TRACER",
        "md": "TRAC"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - TURNPIKE CRUISER",
        "md": "TUR"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - VILLAGER",
        "md": "VILL"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - VOYAGER",
        "md": "VOYA"
      },
      {
        "mk": "MERC",
        "search": "MERCURY - ZEPHYR",
        "md": "ZEP"
      },
      {
        "mk": "MERK",
        "search": "MERKUR - SCORPIO",
        "md": "SCOR"
      },
      {
        "mk": "MERK",
        "search": "MERKUR - XR4Ti",
        "md": "XR4"
      },
      {
        "mk": "MESS",
        "search": "MESSERSCHMITT - KR200",
        "md": "KR"
      },
      {
        "mk": "MESS",
        "search": "MESSERSCHMITT - KR201",
        "md": "KR1"
      },
      {
        "mk": "MESS",
        "search": "MESSERSCHMITT - TIGER",
        "md": "TIG"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - COUNTRY SEDAN",
        "md": "COY"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - LEMOYNE",
        "md": "LEM"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - MONTCALM",
        "md": "MON"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - MONTEGO",
        "md": "MGO"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - NIAGARA",
        "md": "NIA"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - RANCH WAGON",
        "md": "RAW"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - RIDEAU",
        "md": "RID"
      },
      {
        "mk": "METE",
        "search": "METEOR (CANADIAN MERCURY) - S-33",
        "md": "S33"
      },
      {
        "mk": "METR",
        "search": "METROPOLITAN - ",
        "md": ""
      },
      {
        "mk": "MG",
        "search": "MG - 1100",
        "md": "MG1"
      },
      {
        "mk": "MG",
        "search": "MG - 1600",
        "md": "1600"
      },
      {
        "mk": "MG",
        "search": "MG - MAGNETTE",
        "md": "MAGN"
      },
      {
        "mk": "MG",
        "search": "MG - MARINA",
        "md": "MARI"
      },
      {
        "mk": "MG",
        "search": "MG - MARK II",
        "md": "MARK"
      },
      {
        "mk": "MG",
        "search": "MG - MGA",
        "md": "MGA"
      },
      {
        "mk": "MG",
        "search": "MG - MGB",
        "md": "MGB"
      },
      {
        "mk": "MG",
        "search": "MG - MGB/GT",
        "md": "MGG"
      },
      {
        "mk": "MG",
        "search": "MG - MGC",
        "md": "MGC"
      },
      {
        "mk": "MG",
        "search": "MG - MGC/GT",
        "md": "MGT"
      },
      {
        "mk": "MG",
        "search": "MG - MIDGET",
        "md": "MIDG"
      },
      {
        "mk": "MG",
        "search": "MG - PRINCESS 4-R",
        "md": "4R"
      },
      {
        "mk": "MG",
        "search": "MG - SPORTS SEDAN",
        "md": "SPS"
      },
      {
        "mk": "MG",
        "search": "MG - SPRITE",
        "md": "SPRI"
      },
      {
        "mk": "MG",
        "search": "MG - TF SERIES",
        "md": "TF"
      },
      {
        "mk": "MIKA",
        "search": "MIKASA - ",
        "md": ""
      },
      {
        "mk": "MIKR",
        "search": "MIKRUS - ",
        "md": ""
      },
      {
        "mk": "MINI",
        "search": "MINI - COOPER",
        "md": "COOP"
      },
      {
        "mk": "MIST",
        "search": "MISTRAL - ",
        "md": ""
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - 3000 GT",
        "md": "3GT"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - CHARIOT",
        "md": "CHAR"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - CORDIA",
        "md": "CORD"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - DELICA",
        "md": "DELI"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - DIAMANTE",
        "md": "DIAM"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - ECLIPSE",
        "md": "ECLI"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - ECLIPSE SPYDER GS-T",
        "md": "ECL"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - ENDEAVOR",
        "md": "ENDE"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - EXPO",
        "md": "EXPO"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - GALANT",
        "md": "GALA"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - LANCER",
        "md": "LANC"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - MIGHTY MAX",
        "md": "MTX"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - MINICA",
        "md": "MIN"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - MIRAGE",
        "md": "MIRA"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - MONTERO/MONTERO SPORT",
        "md": "MONT"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - OUTLANDER",
        "md": "OUTL"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - PRECIS",
        "md": "PRE"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - RVR",
        "md": "RVR"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - SIGMA",
        "md": "SIG"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - SPYDER 3000 GT",
        "md": "SPYD"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - STARION",
        "md": "STA"
      },
      {
        "mk": "MITS",
        "search": "MITSUBISHI - TREDIA",
        "md": "TRE"
      },
      {
        "mk": "MODE",
        "search": "MODEL A & MODEL T MOTOR CAR REPRODUCTION CORP. - GT250",
        "md": "250"
      },
      {
        "mk": "MODE",
        "search": "MODEL A & MODEL T MOTOR CAR REPRODUCTION CORP. - MODEL A",
        "md": "MOD"
      },
      {
        "mk": "MODE",
        "search": "MODEL A & MODEL T MOTOR CAR REPRODUCTION CORP. - THUNDERBIRD",
        "md": "THUN"
      },
      {
        "mk": "MONA",
        "search": "MONARCH - LUCERNE",
        "md": "LUC"
      },
      {
        "mk": "MONA",
        "search": "MONARCH - RICHELIEU",
        "md": "RIC"
      },
      {
        "mk": "MONA",
        "search": "MONARCH - SCEPTRE",
        "md": "SCP"
      },
      {
        "mk": "MONK",
        "search": "MONK - ",
        "md": ""
      },
      {
        "mk": "MORE",
        "search": "MORETTI - ",
        "md": ""
      },
      {
        "mk": "MORG",
        "search": "MORGAN - 4/4 MARK 5",
        "md": "MK5"
      },
      {
        "mk": "MORG",
        "search": "MORGAN - PLUS 4 SERIES",
        "md": "PL4"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - 1100",
        "md": "110"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - 850 SERIES",
        "md": "850"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - MINI SERIES",
        "md": "MII"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - MINOR",
        "md": "MIN"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - OXFORD",
        "md": "OXF"
      },
      {
        "mk": "MORR",
        "search": "MORRIS - TRAVELLER",
        "md": "TRV"
      },
      {
        "mk": "MOSK",
        "search": "MOSKOVITCH - ",
        "md": ""
      },
      {
        "mk": "MOTO",
        "search": "MOTO GUZZI - V7",
        "md": "V7"
      },
      {
        "mk": "MOTO",
        "search": "MOTO GUZZI - V9",
        "md": "V9"
      },
      {
        "mk": "MCI",
        "search": "MOTOR COACH INDUSTRIES - ",
        "md": ""
      },
      {
        "mk": "MUNT",
        "search": "MUNTZ - JET",
        "md": "JET"
      },
      {
        "mk": "MURE",
        "search": "MURENA - ",
        "md": ""
      },
      {
        "mk": "MZMA",
        "search": "MZMA - ",
        "md": ""
      },
      {
        "mk": "NAHA",
        "search": "NAHANNI MANUFACTURING LTD - ",
        "md": ""
      },
      {
        "mk": "NARD",
        "search": "NARDI-DANESE - ",
        "md": ""
      },
      {
        "mk": "NASH",
        "search": "NASH - AMBASSADOR",
        "md": "AMB"
      },
      {
        "mk": "NASH",
        "search": "NASH - LAYFAYETTE",
        "md": "LAF"
      },
      {
        "mk": "NASH",
        "search": "NASH - METROPOLITAN",
        "md": "MET"
      },
      {
        "mk": "NASH",
        "search": "NASH - RAMBLER",
        "md": "RAM"
      },
      {
        "mk": "NASH",
        "search": "NASH - STATESMAN",
        "md": "STA"
      },
      {
        "mk": "NAHE",
        "search": "NASH-HEALY - ",
        "md": ""
      },
      {
        "mk": "NECK",
        "search": "NECKAR - ",
        "md": ""
      },
      {
        "mk": "NEFL",
        "search": "NEW FLYER - BUS",
        "md": "BUS"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - BAY STAR",
        "md": "BAYS"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - CANYON STAR",
        "md": "CANY"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - DUTCH STAR",
        "md": "DUTC"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - ESSEX",
        "md": "ESSE"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - KING AIRE",
        "md": "KING"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - MOUNTAIN AIRE",
        "md": "MOUN"
      },
      {
        "mk": "NEWM",
        "search": "NEWMAR - VENTANA",
        "md": "VENT"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - 200SX",
        "md": "200S"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - 240SX",
        "md": "240S"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - 300ZX",
        "md": "300Z"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - 350Z",
        "md": "350Z"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - 370Z",
        "md": "370Z"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - ALTIMA",
        "md": "ALTI"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - ARMADA",
        "md": "ARMA"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - AXXESS",
        "md": "AXXE"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - CUBE",
        "md": "CUBE"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - FRONTIER",
        "md": "FRON"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - GT-R",
        "md": "GT-R"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - JUKE",
        "md": "JUKE"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - KICKS",
        "md": "KICK"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - LEAF",
        "md": "LEAF"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - MAXIMA",
        "md": "MAXI"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - MICRA",
        "md": "MICR"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - MURANO",
        "md": "MURA"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - NAVARA",
        "md": "NAVA"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - NP300",
        "md": "NP30"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - NV200",
        "md": "NV20"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - NX",
        "md": "NX"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - PATHFINDER",
        "md": "PATH"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - PULSAR",
        "md": "PULS"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - QASHQAI",
        "md": "QASH"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - QUEST",
        "md": "QUES"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - ROGUE",
        "md": "ROGU"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - SE-V6",
        "md": "SE"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - SENTRA",
        "md": "SENT"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - SKYLINE",
        "md": "SKYL"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - SP&SP",
        "md": "SPSP"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - STANZA",
        "md": "STAN"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - TERRANO II",
        "md": "TERR"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - TITAN",
        "md": "TITA"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - VERSA",
        "md": "VERS"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - XE",
        "md": "XE"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - XTERRA",
        "md": "XTER"
      },
      {
        "mk": "NISS",
        "search": "NISSAN - XTRAIL",
        "md": "XTRA"
      },
      {
        "mk": "NORT",
        "search": "NORTHWOOD MANUFACTURING - ARCTIC FOX",
        "md": "ARCT"
      },
      {
        "mk": "NOVA",
        "search": "NOVABUS - HEV",
        "md": "HEV"
      },
      {
        "mk": "NSU",
        "search": "NSU PRINZ - 1000",
        "md": "100"
      },
      {
        "mk": "NSU",
        "search": "NSU PRINZ - 110 TYPE",
        "md": "110"
      },
      {
        "mk": "NSU",
        "search": "NSU PRINZ - AUTO NOVA",
        "md": "AVA"
      },
      {
        "mk": "NSU",
        "search": "NSU PRINZ - PRINZ",
        "md": "PRIN"
      },
      {
        "mk": "NSU",
        "search": "NSU PRINZ - SPIDER (WANKEL)",
        "md": "SPI"
      },
      {
        "mk": "NSUF",
        "search": "NSU-FIAT - ",
        "md": ""
      },
      {
        "mk": "OAKL",
        "search": "OAKLAND - ",
        "md": ""
      },
      {
        "mk": "OGLE",
        "search": "OGLE - ",
        "md": ""
      },
      {
        "mk": "OHTA",
        "search": "OHTA - ",
        "md": ""
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - 442",
        "md": "442"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - 88",
        "md": "88"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - 98",
        "md": "98"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - ACHIEVA",
        "md": "ACHI"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - ALERO",
        "md": "ALER"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - AURORA",
        "md": "AURO"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - BRAVADA",
        "md": "BRAV"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CALAIS",
        "md": "CALA"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CARAVAN",
        "md": "CARA"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CUSTOM CRUISER",
        "md": "CCR"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CUTLASS",
        "md": "CUTL"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - CUTLASS SUPREME",
        "md": "CUTS"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - DELMONT 88",
        "md": "DLM"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - DELTA 88",
        "md": "DELT"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - DYNAMIC 88",
        "md": "DYN"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - F-85",
        "md": "F85"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - FIRENZA",
        "md": "FIRE"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - HOLIDAY",
        "md": "HOLI"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - INTRIGUE",
        "md": "INTR"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - JETFIRE",
        "md": "JTF"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - JETSTAR",
        "md": "JTS"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - LSS",
        "md": "DLT"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - OMEGA",
        "md": "OMEG"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - REGENCY (NINETY-EIGHT SERIES)",
        "md": "REG"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - ROYALE",
        "md": "ROYA"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - SILHOUETTE",
        "md": "SIL"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - STANDARD",
        "md": "STD"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - STARFIRE",
        "md": "STA"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - SUPER 88",
        "md": "SUP"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - TORONADO",
        "md": "TORO"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - TROFEO",
        "md": "TRO"
      },
      {
        "mk": "OLDS",
        "search": "OLDSMOBILE - VISTA CRUISER",
        "md": "VIS"
      },
      {
        "mk": "OMEG",
        "search": "OMEGA (ITALIAN) - ",
        "md": ""
      },
      {
        "mk": "OPEL",
        "search": "OPEL - 1900",
        "md": "190"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - ASTRA",
        "md": "ASTR"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - CARAVAN",
        "md": "CARA"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - DIPLOMAT",
        "md": "DIPL"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - GT",
        "md": "GT"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - KADETTE",
        "md": "KAD"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - KAPITAN",
        "md": "KAP"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - LUXUS",
        "md": "LUX"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - MANTA",
        "md": "MAN"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - OLYMPIA",
        "md": "OLY"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - RALLYE",
        "md": "RAL"
      },
      {
        "mk": "OPEL",
        "search": "OPEL - REKORD",
        "md": "REK"
      },
      {
        "mk": "OPER",
        "search": "OPEN ROADSTERS OF TEXAS - ",
        "md": ""
      },
      {
        "mk": "ORIO",
        "search": "ORION BUS INDUSTRIES - ",
        "md": ""
      },
      {
        "mk": "OSCA",
        "search": "OSCA - ",
        "md": ""
      },
      {
        "mk": "OSI",
        "search": "OSI - ",
        "md": ""
      },
      {
        "mk": "OTOS",
        "search": "OTOSAN - ",
        "md": ""
      },
      {
        "mk": "OVER",
        "search": "OVERLAND - ",
        "md": ""
      },
      {
        "mk": "PACK",
        "search": "PACKARD - BALBOA",
        "md": "BAL"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - CARIBBEAN",
        "md": "CAR"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - CAVALIER",
        "md": "CAVA"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - CLIPPER",
        "md": "CLI"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - PATRICIAN",
        "md": "PAT"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - PREDICTOR",
        "md": "PRD"
      },
      {
        "mk": "PACK",
        "search": "PACKARD - REQUEST",
        "md": "REQ"
      },
      {
        "mk": "PALL",
        "search": "PALLISER (RACING CAR) - ",
        "md": ""
      },
      {
        "mk": "PANH",
        "search": "PANHARD - ",
        "md": ""
      },
      {
        "mk": "PANZ",
        "search": "PANOZ AUTO DEVELOPMENT - ROADSTER",
        "md": "ROD"
      },
      {
        "mk": "PANE",
        "search": "PANTHER WESTWINDS LTD. - DEVILLE",
        "md": "DEVI"
      },
      {
        "mk": "PANE",
        "search": "PANTHER WESTWINDS LTD. - J72",
        "md": "J72"
      },
      {
        "mk": "PANE",
        "search": "PANTHER WESTWINDS LTD. - KILLETA",
        "md": "KAL"
      },
      {
        "mk": "PANE",
        "search": "PANTHER WESTWINDS LTD. - LIMA",
        "md": "LIM"
      },
      {
        "mk": "PASS",
        "search": "PASSPORT - OPTIMA",
        "md": "OPTI"
      },
      {
        "mk": "PEAC",
        "search": "PEACE - ",
        "md": ""
      },
      {
        "mk": "PEEL",
        "search": "PEEL - ",
        "md": ""
      },
      {
        "mk": "PEER",
        "search": "PEERLESS - ",
        "md": ""
      },
      {
        "mk": "PEGA",
        "search": "PEGASO - ",
        "md": ""
      },
      {
        "mk": "PETE",
        "search": "PETERBILT - ",
        "md": ""
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 203",
        "md": "203"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 304",
        "md": "304"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 403",
        "md": "403"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 404",
        "md": "404"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 405",
        "md": "405"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 504 SERIES",
        "md": "504"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 505 SERIES",
        "md": "505"
      },
      {
        "mk": "PEUG",
        "search": "PEUGEOT - 604",
        "md": "604"
      },
      {
        "mk": "PHOE",
        "search": "PHOENIX - ",
        "md": ""
      },
      {
        "mk": "PIAG",
        "search": "PIAGGIO - TYPHOON",
        "md": "TYPH"
      },
      {
        "mk": "PRCA",
        "search": "PIERCE ARROW - ",
        "md": ""
      },
      {
        "mk": "PINI",
        "search": "PINIFARINA - ",
        "md": ""
      },
      {
        "mk": "PJ",
        "search": "PJ - D7",
        "md": "D7"
      },
      {
        "mk": "PLAY",
        "search": "PLAYBOY - ",
        "md": ""
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - ACCLAIM",
        "md": "ACCL"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - ARROW",
        "md": "ARRO"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - BARRACUDA",
        "md": "BARR"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - BELVEDERE",
        "md": "BELV"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - BREEZE",
        "md": "BREE"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CAMBRIDGE",
        "md": "CAMB"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CARAVELLE",
        "md": "CARA"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CHAMP",
        "md": "CHAM"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - COLT",
        "md": "COLT"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CONQUEST",
        "md": "CONQ"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CRANBROOK",
        "md": "CRA"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - CRICKET (IMPORTED)",
        "md": "CRIC"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - DUSTER",
        "md": "DUST"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - FURY (ALSO GRAN FURY)",
        "md": "FURY"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - GTX",
        "md": "GTX"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - HORIZON (ALSO TC3)",
        "md": "HORI"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - LASER",
        "md": "LASE"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - NEON",
        "md": "NEON"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - PLAZA",
        "md": "PLAZ"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - RELIANT",
        "md": "RELI"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - ROAD RUNNER",
        "md": "ROAD"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SAPPORO",
        "md": "SAPO"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SATELLITE",
        "md": "SATE"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SAVOY",
        "md": "SAVO"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SCAMP",
        "md": "SCAM"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SIGNET",
        "md": "SIGN"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SUBURBAN",
        "md": "SUBU"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - SUNDANCE",
        "md": "SUND"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - TURISMO",
        "md": "TURI"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - VALIANT",
        "md": "VALI"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - VIP",
        "md": "VIP"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - VOLARE",
        "md": "VOLA"
      },
      {
        "mk": "PLYM",
        "search": "PLYMOUTH - VOYAGER",
        "md": "VOYA"
      },
      {
        "mk": "POIR",
        "search": "POIRIER - ",
        "md": ""
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - 2+2",
        "md": "2P2"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - 2000",
        "md": "2000"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - 6000",
        "md": "6000"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - ASTRE",
        "md": "ASTR"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - AZTEK",
        "md": "AZTE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - BONNEVILLE",
        "md": "BONN"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - CATALINA",
        "md": "CATA"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - CHIEFTAIN",
        "md": "CHIE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - EXECUTIVE",
        "md": "EXE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - FIERO",
        "md": "FIER"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - FIREBIRD",
        "md": "FIRE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - FIREFLY",
        "md": "FIRF"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - FIREHAWK",
        "md": "FIRH"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - G3",
        "md": "G3"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - G5",
        "md": "G5"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - G6",
        "md": "G6"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - GRAND AM",
        "md": "GRAN"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - GRAND PARISIENNE",
        "md": "PARG"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - GRAND PRIX",
        "md": "GRAP"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - GRAND VILLE",
        "md": "GRD"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - GT0",
        "md": "GT0"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - J2000",
        "md": "J200"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - LAURENTIAN",
        "md": "LAUR"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - LEMANS",
        "md": "LEMA"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - MONTANA",
        "md": "MONT"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - PARISIENNE",
        "md": "PARI"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - PHOENIX",
        "md": "PHOE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - PURSUIT",
        "md": "PURS"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SAFARI",
        "md": "SAFA"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SKY CHIEF",
        "md": "SKY"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SOLSTICE",
        "md": "SOLS"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SSE",
        "md": "SSE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - STAR CHIEF",
        "md": "STA"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - STRATO CHIEF",
        "md": "STRA"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - STREAMLINER",
        "md": "STR"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SUNBIRD",
        "md": "SUNB"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SUNFIRE",
        "md": "SUNF"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SUNRUNNER",
        "md": "SUNR"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - SUPER CHIEF",
        "md": "SUP"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - T-1000",
        "md": "T10"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - TEMPEST",
        "md": "TEMP"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - TEMPEST GTO",
        "md": "TEMG"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - TORRENT",
        "md": "TORR"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - TRANS AM (SEE FIREBIRD)",
        "md": "TRAN"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - TRANS SPORT/TRANSPORT",
        "md": "TRAS"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - VENTURA",
        "md": "VENT"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - VIBE",
        "md": "VIBE"
      },
      {
        "mk": "PONT",
        "search": "PONTIAC - WAVE",
        "md": "WAVE"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 1300",
        "md": "130"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 1500",
        "md": "150"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 1600",
        "md": "160"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 356",
        "md": "356"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 911",
        "md": "911"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 912",
        "md": "912"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 914",
        "md": "914"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 918 SPYDER",
        "md": "918"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 924",
        "md": "924"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 928",
        "md": "928"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 930",
        "md": "930"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 944",
        "md": "944"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - 968",
        "md": "968"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - BOXSTER",
        "md": "BOXS"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - CABRIOLET",
        "md": "CABR"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - CARRERA",
        "md": "CARR"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - CAYENNE",
        "md": "CAYE"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - CAYMAN",
        "md": "CAYM"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - KARMAN",
        "md": "KARM"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - MACAN",
        "md": "MACA"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - PANAMERA",
        "md": "PANA"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - STANDARD",
        "md": "STA"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - SUPER",
        "md": "SUP"
      },
      {
        "mk": "PORS",
        "search": "PORSCHE - TARGA",
        "md": "TARG"
      },
      {
        "mk": "PRAI",
        "search": "PRAIRIE SCHOONER - ",
        "md": ""
      },
      {
        "mk": "PRMO",
        "search": "PRINCE MOTORS - ",
        "md": ""
      },
      {
        "mk": "PROG",
        "search": "PROGRESS - ",
        "md": ""
      },
      {
        "mk": "PTV",
        "search": "PTV - ",
        "md": ""
      },
      {
        "mk": "PUCH",
        "search": "PUCH - ",
        "md": ""
      },
      {
        "mk": "PUMM",
        "search": "PUMA - ",
        "md": ""
      },
      {
        "mk": "RAM",
        "search": "RAM - ProMaster",
        "md": "PROM"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - AMBASSADOR",
        "md": "AMBA"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - AMERICAN",
        "md": "AMER"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - CLASSIC",
        "md": "CLAS"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - CUSTOM",
        "md": "CUS"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - SUPER",
        "md": "SUP"
      },
      {
        "mk": "RAMB",
        "search": "RAMBLER - TYPHOON",
        "md": "TYP"
      },
      {
        "mk": "RAMS",
        "search": "RAMSES - ",
        "md": ""
      },
      {
        "mk": "REI",
        "search": "REINELL - ",
        "md": ""
      },
      {
        "mk": "RELI",
        "search": "RELIANT - ",
        "md": ""
      },
      {
        "mk": "RENA",
        "search": "RENAULT - 18i",
        "md": "18i"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - 750",
        "md": "750"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - CARAVELLE",
        "md": "CARA"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - DAUPHINE",
        "md": "DAU"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - ESTAFETTE",
        "md": "EST"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - EXPORT",
        "md": "EXPO"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - FUEGO",
        "md": "FUEG"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - GORDINI",
        "md": "GON"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - LE CAR",
        "md": "LEC"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - LUXE",
        "md": "LX"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-10",
        "md": "R10"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-12",
        "md": "R12"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-15",
        "md": "R15"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-16",
        "md": "R16"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-17",
        "md": "R17"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-4",
        "md": "R4"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-5",
        "md": "R5"
      },
      {
        "mk": "RENA",
        "search": "RENAULT - R-8",
        "md": "R8"
      },
      {
        "mk": "REO",
        "search": "REO - ",
        "md": ""
      },
      {
        "mk": "REXH",
        "search": "REXHALL - AERBUS",
        "md": "AERB"
      },
      {
        "mk": "REXH",
        "search": "REXHALL - CONCORD",
        "md": "CONC"
      },
      {
        "mk": "REXH",
        "search": "REXHALL - FLEETWOOD",
        "md": "FLEE"
      },
      {
        "mk": "REXH",
        "search": "REXHALL - REXAIR",
        "md": "REXA"
      },
      {
        "mk": "REXH",
        "search": "REXHALL - ROLLSAIR",
        "md": "ROLL"
      },
      {
        "mk": "RIND",
        "search": "RICH INDUSTRIES - ",
        "md": ""
      },
      {
        "mk": "RILE",
        "search": "RILEY - ",
        "md": ""
      },
      {
        "mk": "ROAD",
        "search": "ROADRUNNER TRAILERS MFG. - ",
        "md": ""
      },
      {
        "mk": "ROCH",
        "search": "ROCHDALE - ",
        "md": ""
      },
      {
        "mk": "ROK",
        "search": "ROCKNE - ",
        "md": ""
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - CAMARGUE",
        "md": "CAM"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - CORNICHE",
        "md": "CORN"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - FLYING SPUR",
        "md": "FPR"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - MULSANNE",
        "md": "MUL"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - PHANTOM",
        "md": "PHAN"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER CLOUD",
        "md": "SILV"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER DAWN",
        "md": "SID"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER SERAPH",
        "md": "SER"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER SHADOW",
        "md": "SIS"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER SPIRIT",
        "md": "SSP"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER SPUR",
        "md": "SPR"
      },
      {
        "mk": "ROLL",
        "search": "ROLLS-ROYCE - SILVER WRAITH",
        "md": "SIW"
      },
      {
        "mk": "ROOT",
        "search": "ROOTES - ALPINE",
        "md": "ALP"
      },
      {
        "mk": "ROOT",
        "search": "ROOTES - ARROW",
        "md": "ARR"
      },
      {
        "mk": "ROOT",
        "search": "ROOTES - IMP",
        "md": "IMP"
      },
      {
        "mk": "ROOT",
        "search": "ROOTES - TIGER",
        "md": "TIG"
      },
      {
        "mk": "ROVE",
        "search": "ROVER - 2000",
        "md": "200"
      },
      {
        "mk": "ROVE",
        "search": "ROVER - 3 LITRE",
        "md": "3L"
      },
      {
        "mk": "ROVE",
        "search": "ROVER - 3500",
        "md": "350"
      },
      {
        "mk": "ROVE",
        "search": "ROVER - LAND ROVER",
        "md": "LAND"
      },
      {
        "mk": "ROVE",
        "search": "ROVER - MARK IV",
        "md": "MK4"
      },
      {
        "mk": "RYCS",
        "search": "RYCSA - ",
        "md": ""
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 9-3",
        "md": "9-3"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 900",
        "md": "900"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 9000",
        "md": "9000"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 92",
        "md": "92"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 92X",
        "md": "92X"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 93 & 93B",
        "md": "93"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 95",
        "md": "95"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 96",
        "md": "96"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 97",
        "md": "97"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 97X",
        "md": "97X"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - 99",
        "md": "99"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - GT 750",
        "md": "GT"
      },
      {
        "mk": "SAAB",
        "search": "SAAB - SONNET",
        "md": "SON"
      },
      {
        "mk": "SABR",
        "search": "SABRA - ",
        "md": ""
      },
      {
        "mk": "SANG",
        "search": "SANGYONG - CM600S",
        "md": "CM60"
      },
      {
        "mk": "SANG",
        "search": "SANGYONG - JEEP",
        "md": "JEEP"
      },
      {
        "mk": "SATU",
        "search": "SATURN - ASTRA",
        "md": "ASTR"
      },
      {
        "mk": "SATU",
        "search": "SATURN - EVI",
        "md": "EVI"
      },
      {
        "mk": "SATU",
        "search": "SATURN - ION",
        "md": "ION"
      },
      {
        "mk": "SATU",
        "search": "SATURN - LS1",
        "md": "LS1"
      },
      {
        "mk": "SATU",
        "search": "SATURN - LSERIES",
        "md": "LSER"
      },
      {
        "mk": "SATU",
        "search": "SATURN - LW200",
        "md": "LW20"
      },
      {
        "mk": "SATU",
        "search": "SATURN - RELAY",
        "md": "RELA"
      },
      {
        "mk": "SATU",
        "search": "SATURN - SC",
        "md": "SC"
      },
      {
        "mk": "SATU",
        "search": "SATURN - SKY",
        "md": "SKY"
      },
      {
        "mk": "SATU",
        "search": "SATURN - SL",
        "md": "SL"
      },
      {
        "mk": "SATU",
        "search": "SATURN - SW",
        "md": "SW"
      },
      {
        "mk": "SATU",
        "search": "SATURN - VUE",
        "md": "VUE"
      },
      {
        "mk": "SCIO",
        "search": "SCION - FR-S",
        "md": "FRS"
      },
      {
        "mk": "SCIO",
        "search": "SCION - IM",
        "md": "IM"
      },
      {
        "mk": "SCIO",
        "search": "SCION - TC",
        "md": "TC"
      },
      {
        "mk": "SCIO",
        "search": "SCION - XA",
        "md": "XA"
      },
      {
        "mk": "SCIO",
        "search": "SCION - XB",
        "md": "XB"
      },
      {
        "mk": "SEA",
        "search": "SEADOO - ",
        "md": ""
      },
      {
        "mk": "RAY",
        "search": "SEARAY - ",
        "md": ""
      },
      {
        "mk": "SEAT",
        "search": "SEAT - ",
        "md": ""
      },
      {
        "mk": "SERA",
        "search": "SERA - ",
        "md": ""
      },
      {
        "mk": "SHEB",
        "search": "SHELBY AMERICAN - COBRA",
        "md": "COBR"
      },
      {
        "mk": "SHEB",
        "search": "SHELBY AMERICAN - COBRA GT500",
        "md": "C500"
      },
      {
        "mk": "SHEB",
        "search": "SHELBY AMERICAN - CSX",
        "md": "CSX"
      },
      {
        "mk": "SIAT",
        "search": "SIATA - ",
        "md": ""
      },
      {
        "mk": "SILA",
        "search": "SILA AUTORETTA - ",
        "md": ""
      },
      {
        "mk": "SIM",
        "search": "SIMCA - 1000 & 1000GL",
        "md": "100"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - 120",
        "md": "120"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - ARONDE",
        "md": "ARO"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - BERTONE",
        "md": "BER"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - ETOILE",
        "md": "ETO"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - GLS",
        "md": "GLS"
      },
      {
        "mk": "SIM",
        "search": "SIMCA - VEDETTE",
        "md": "VED"
      },
      {
        "mk": "SIN",
        "search": "SINGER - CHAMOIS",
        "md": "CHA"
      },
      {
        "mk": "SIN",
        "search": "SINGER - VOGUE",
        "md": "VOG"
      },
      {
        "mk": "SKI",
        "search": "SKI NAUTIQUE - ",
        "md": ""
      },
      {
        "mk": "SKOD",
        "search": "SKODA - ",
        "md": ""
      },
      {
        "mk": "SMAR",
        "search": "SMART - FORTWO",
        "md": "FORT"
      },
      {
        "mk": "SNOW",
        "search": "SNOWBEAR LIMITED - ",
        "md": ""
      },
      {
        "mk": "SOUT",
        "search": "SOUTHLAND - SL252T",
        "md": "252T"
      },
      {
        "mk": "SOVA",
        "search": "SOVAM - ",
        "md": ""
      },
      {
        "mk": "SPAR",
        "search": "SPARTAN - ",
        "md": ""
      },
      {
        "mk": "STAN",
        "search": "STANDARD - ",
        "md": ""
      },
      {
        "mk": "STLY",
        "search": "STANLEY - ",
        "md": ""
      },
      {
        "mk": "STAR",
        "search": "STAR - ",
        "md": ""
      },
      {
        "mk": "STEA",
        "search": "STEALTH - ",
        "md": ""
      },
      {
        "mk": "STLG",
        "search": "STERLING - 825",
        "md": "825"
      },
      {
        "mk": "STLG",
        "search": "STERLING - 827",
        "md": "827"
      },
      {
        "mk": "STLG",
        "search": "STERLING - STERLING",
        "md": "TK"
      },
      {
        "mk": "STEW",
        "search": "STEWART - ",
        "md": ""
      },
      {
        "mk": "STEY",
        "search": "STEYR-PUCH - ",
        "md": ""
      },
      {
        "mk": "STRA",
        "search": "STRALE - ",
        "md": ""
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - AVANTI",
        "md": "AVAN"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - CHALLENGER",
        "md": "CHAL"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - CHAMPION",
        "md": "CHAM"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - COMMANDER",
        "md": "COM"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - CRUISER",
        "md": "CRU"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - DAYTONA",
        "md": "DAYT"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - GRAND TURISMO",
        "md": "TURI"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - HAWK SERIES",
        "md": "HAWK"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - LANDALL",
        "md": "LAN"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - LANK SERIES",
        "md": "LAR"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - PRESIDENT",
        "md": "PRE"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - REGAL",
        "md": "REGA"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - SCOTSMAN",
        "md": "SCO"
      },
      {
        "mk": "STUD",
        "search": "STUDEBAKER - WAGONAIRE",
        "md": "WAGO"
      },
      {
        "mk": "STUZ",
        "search": "STUTZ - ",
        "md": ""
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - 100 SERIES",
        "md": "100"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - 1100 SERIES",
        "md": "110"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - 1300 SERIES",
        "md": "130"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - 1400 SERIES",
        "md": "140"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - 1600 SERIES",
        "md": "160"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - ASCENT",
        "md": "ASCE"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - BAJA",
        "md": "BAJA"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - BRZ",
        "md": "BRZ"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - CROSSTREK",
        "md": "CROS"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - DL",
        "md": "DL"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - FE",
        "md": "FE2"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - FORESTER",
        "md": "FORR"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - GL",
        "md": "GL"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - GLF",
        "md": "GLF"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - IMPREZA",
        "md": "IMPR"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - IMPREZA OUTBACK",
        "md": "IMPO"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - JUSTY",
        "md": "JUST"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - LEGACY",
        "md": "LEGA"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - LEGACY OUTBACK",
        "md": "LEGO"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - LEONE GL COUPE",
        "md": "LEON"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - LOYALE",
        "md": "LOYA"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - OUTBACK SPORT (SW)",
        "md": "SPOR"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - RX",
        "md": "RX"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - STANDARD",
        "md": "STA"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - SVX",
        "md": "SVX"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - TRIBECA",
        "md": "TRIB"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - WRX",
        "md": "WRX"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - XT COUPE",
        "md": "XTC"
      },
      {
        "mk": "SUBA",
        "search": "SUBARU - XT6",
        "md": "XT6"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - ALPINE",
        "md": "ALP"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - ARROW",
        "md": "ARR"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - IMP",
        "md": "IMP"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - MINX",
        "md": "MINX"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - RAPIER",
        "md": "RAP"
      },
      {
        "mk": "SUNB",
        "search": "SUNBEAM - TIGER",
        "md": "TIG"
      },
      {
        "mk": "SUPT",
        "search": "SUPER TWO - ",
        "md": ""
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - AERIO",
        "md": "AERI"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - ESTEEM",
        "md": "ESTE"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - FORSA",
        "md": "FORS"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - GRAND VITARA",
        "md": "GRVI"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - KIZASHI",
        "md": "KIZA"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - SAMURAI",
        "md": "SAMU"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - SIDEKICK",
        "md": "SIDE"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - SWIFT",
        "md": "SWIF"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - SX4",
        "md": "SX4"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - VERONA",
        "md": "VER"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - VITARA",
        "md": "VITA"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - X90",
        "md": "X90"
      },
      {
        "mk": "SUZU",
        "search": "SUZUKI - XL7",
        "md": "XL7"
      },
      {
        "mk": "SUZL",
        "search": "SUZULIGHT SU - ",
        "md": ""
      },
      {
        "mk": "SYRE",
        "search": "SYRENA - ",
        "md": ""
      },
      {
        "mk": "TAMA",
        "search": "TAMA - ",
        "md": ""
      },
      {
        "mk": "TATR",
        "search": "TATRA - ",
        "md": ""
      },
      {
        "mk": "TAUN",
        "search": "TAUNUS (GERMAN FORD) - ",
        "md": ""
      },
      {
        "mk": "TCHA",
        "search": "TCHAIKA - ",
        "md": ""
      },
      {
        "mk": "TRPE",
        "search": "TERRAPLANE - ",
        "md": ""
      },
      {
        "mk": "TESL",
        "search": "TESLA MOTORS - MODEL 3",
        "md": "3"
      },
      {
        "mk": "TESL",
        "search": "TESLA MOTORS - MODEL S",
        "md": "S"
      },
      {
        "mk": "TESL",
        "search": "TESLA MOTORS - MODEL X",
        "md": "X"
      },
      {
        "mk": "TESL",
        "search": "TESLA MOTORS - MODEL Y",
        "md": "Y"
      },
      {
        "mk": "TESL",
        "search": "TESLA MOTORS - ROADSTER",
        "md": "ROAD"
      },
      {
        "mk": "THOM",
        "search": "THOMAS - SCHOOL BUS",
        "md": "BUS"
      },
      {
        "mk": "THOR",
        "search": "THOR INDUSTRIES INC. - ACE",
        "md": "ACE"
      },
      {
        "mk": "THOR",
        "search": "THOR INDUSTRIES INC. - WAVE",
        "md": "WAVE"
      },
      {
        "mk": "THUN",
        "search": "THUNDERJET - ",
        "md": ""
      },
      {
        "mk": "TITA",
        "search": "TITAN MOTORCYCLE CO. - ",
        "md": ""
      },
      {
        "mk": "TJAA",
        "search": "TJAARDA - ",
        "md": ""
      },
      {
        "mk": "TORN",
        "search": "TORNADO (BRITISH) - ",
        "md": ""
      },
      {
        "mk": "TOYP",
        "search": "TOYOPET - ",
        "md": ""
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - 4-RUNNER",
        "md": "4RUN"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - 86",
        "md": "86"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - ARISTO",
        "md": "ARIS"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - AVALON",
        "md": "AVAL"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - AVENSIS",
        "md": "AVEN"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - C-HR",
        "md": "CHR"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CAMRY",
        "md": "CAMR"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CARINA",
        "md": "CARI"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CAVALIER",
        "md": "CAVA"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CELICA",
        "md": "CELI"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - COROLLA",
        "md": "CORO"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CRESSIDA",
        "md": "CRES"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - CROWN",
        "md": "CROW"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - ECHO",
        "md": "ECHO"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - FJ CRUISER",
        "md": "FJ"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - HIGHLANDER",
        "md": "HIGH"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - HILUX",
        "md": "HILU"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - LAND CRUISER",
        "md": "LAND"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - LE VAN",
        "md": "LEVA"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - MARK II",
        "md": "MARK"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - MATRIX",
        "md": "MATR"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - MR2",
        "md": "MR2"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - PASEO",
        "md": "PASE"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - PRE RUNNER",
        "md": "PRE"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - PREVIA",
        "md": "PREV"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - PRIUS",
        "md": "PRI"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - RAV4",
        "md": "RAV4"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SCION",
        "md": "SCIO"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SEQUOIA",
        "md": "SEQU"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SIENNA",
        "md": "SIEN"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SOLARA",
        "md": "SOLA"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SR5",
        "md": "SR5"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - STARLET",
        "md": "STAR"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - SUPRA",
        "md": "SUPR"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - T-100",
        "md": "T100"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - TACOMA",
        "md": "TACO"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - TERCEL",
        "md": "TERC"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - TUNDRA",
        "md": "TUND"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - VENZA",
        "md": "VENZ"
      },
      {
        "mk": "TOYO",
        "search": "TOYOTA - YARIS",
        "md": "YARI"
      },
      {
        "mk": "TRAB",
        "search": "TRABANT - ",
        "md": ""
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - 1200",
        "md": "1200"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - 1250",
        "md": "1250"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - 1300",
        "md": "1300"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - 2000",
        "md": "2000"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - 250",
        "md": "250"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - GT SERIES",
        "md": "GT"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - HERALD",
        "md": "HERA"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - SPITFIRE",
        "md": "SPIT"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - SPORT 6",
        "md": "SP6"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - STAG",
        "md": "STA"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - TR-3 & TR-3A",
        "md": "TR3"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - TR-4 & TR-4A",
        "md": "TR4"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - TR6",
        "md": "TR6"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - TR7",
        "md": "TR7"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - TR8",
        "md": "TR8"
      },
      {
        "mk": "TRIU",
        "search": "TRIUMPH - VITESSE",
        "md": "VITE"
      },
      {
        "mk": "TROJ",
        "search": "TROJAN - ",
        "md": ""
      },
      {
        "mk": "TUCK",
        "search": "TUCKER - ",
        "md": ""
      },
      {
        "mk": "TURN",
        "search": "TURNER - ",
        "md": ""
      },
      {
        "mk": "TVR",
        "search": "TVR - TUSCAN",
        "md": "TUS"
      },
      {
        "mk": "TVR",
        "search": "TVR - VIXEN",
        "md": "VIXE"
      },
      {
        "mk": "TZ",
        "search": "TZ - ",
        "md": ""
      },
      {
        "mk": "UBUI",
        "search": "U-BUILT - ",
        "md": ""
      },
      {
        "mk": "USEL",
        "search": "U.S. ELECTRICAR CORP. - LECTRIC LEOPARD",
        "md": "LTC"
      },
      {
        "mk": "UAZ",
        "search": "UAZ (ULIANOVSK AUTOMOBILE ZAVOD) - CCMV",
        "md": "TK"
      },
      {
        "mk": "UNIC",
        "search": "UNICAR - ",
        "md": ""
      },
      {
        "mk": "UNIP",
        "search": "UNIPOWER - ",
        "md": ""
      },
      {
        "mk": "UTIL",
        "search": "UTILITY - ",
        "md": ""
      },
      {
        "mk": "VAL",
        "search": "VAL - ",
        "md": ""
      },
      {
        "mk": "VALK",
        "search": "VALKRIE - ",
        "md": ""
      },
      {
        "mk": "VNDN",
        "search": "VANDEN PLAS - ",
        "md": ""
      },
      {
        "mk": "VANG",
        "search": "VANGUARD (CANADA) - DELUXE",
        "md": "DEL"
      },
      {
        "mk": "VANG",
        "search": "VANGUARD (CANADA) - ENSIGN",
        "md": "ENS"
      },
      {
        "mk": "VANG",
        "search": "VANGUARD (CANADA) - LUXURY",
        "md": "LUX"
      },
      {
        "mk": "VANG",
        "search": "VANGUARD (CANADA) - MARK III",
        "md": "MK3"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - CRESTA",
        "md": "CRE"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - ENVOY",
        "md": "ENVO"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - EPIC",
        "md": "EPIC"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - FIRENZA",
        "md": "FIRE"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - VELOX",
        "md": "VEL"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - VICTOR",
        "md": "VICT"
      },
      {
        "mk": "VAUX",
        "search": "VAUXHALL - VIVA",
        "md": "VIVA"
      },
      {
        "mk": "VACR",
        "search": "VECTOR AEROMOTIVE CORPORATION - M12 (SPORTS COUPE)",
        "md": "M12"
      },
      {
        "mk": "VACR",
        "search": "VECTOR AEROMOTIVE CORPORATION - VECTOR",
        "md": "VECT"
      },
      {
        "mk": "VEAM",
        "search": "VEHICULOS AUTOMORES MEXICANO - ",
        "md": ""
      },
      {
        "mk": "VERI",
        "search": "VERITAS - ",
        "md": ""
      },
      {
        "mk": "VESP",
        "search": "VESPA - ",
        "md": ""
      },
      {
        "mk": "VOGA",
        "search": "VOLGA - ",
        "md": ""
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - 113",
        "md": "113"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - 1200",
        "md": "1200"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - 1300",
        "md": "1300"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - 1500",
        "md": "1500"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - 411/412",
        "md": "412"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - ATLAS",
        "md": "ATLA"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - BEETLE",
        "md": "BEET"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - CABRIOLET",
        "md": "CABR"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - CORRADO",
        "md": "CORR"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - DASHER",
        "md": "DAS"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - EOS",
        "md": "EOS"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - EUROVAN",
        "md": "EURO"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - FASTBACK",
        "md": "FAST"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - FOX",
        "md": "FOX"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - GOLF",
        "md": "GOLF"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - GTI",
        "md": "GTI"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - JETTA",
        "md": "JETT"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - KARMANN GHIA",
        "md": "KARM"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - PASSAT",
        "md": "PASS"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - PHAETON",
        "md": "PHAE"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - POLO",
        "md": "POLO"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - QUANTUM",
        "md": "QUAN"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - RABBIT",
        "md": "RABB"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - ROUTAN",
        "md": "ROUT"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - SCIROCCO",
        "md": "SCIR"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - SQUAREBACK",
        "md": "SB"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - SUNROOF",
        "md": "SUR"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - THE THING",
        "md": "THIN"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - TIGUAN",
        "md": "TIGU"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - TOUAREG",
        "md": "TOUA"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - VANAGON",
        "md": "VANA"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - VARIANT",
        "md": "VAR"
      },
      {
        "mk": "VOLK",
        "search": "VOLKSWAGEN - WESTFALIA",
        "md": "WEST"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 122 SERIES",
        "md": "122"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 140 SERIES",
        "md": "140"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 164 SERIES",
        "md": "164"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 1800 SERIES",
        "md": "180"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 200 SERIES",
        "md": "200"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 240 SERIES",
        "md": "240"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 245 SERIES",
        "md": "245"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 260 SERIES",
        "md": "260"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 740 SERIES",
        "md": "740"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 745 SERIES",
        "md": "745"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 760",
        "md": "760"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 765 SERIES",
        "md": "765"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 780 SERIES",
        "md": "780"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 850 SERIES",
        "md": "850"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 940",
        "md": "940"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - 960",
        "md": "960"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - C30",
        "md": "C30"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - C70",
        "md": "C70"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - COMBI",
        "md": "COB"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - DL",
        "md": "DL"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - GL",
        "md": "GL"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - GLE",
        "md": "GLE"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - GLT",
        "md": "GLT"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - P1900",
        "md": "190"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - PV444",
        "md": "444"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - PV544",
        "md": "544"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - R4",
        "md": "R4"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - S40",
        "md": "S40"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - S60",
        "md": "S60"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - S70",
        "md": "S70"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - S80",
        "md": "S80"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - S90",
        "md": "S90"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - SPORT",
        "md": "SPO"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - V40",
        "md": "V40"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - V50",
        "md": "V50"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - V70",
        "md": "V70"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - V90",
        "md": "V90"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - XC60",
        "md": "XC60"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - XC70",
        "md": "XC70"
      },
      {
        "mk": "VOLV",
        "search": "VOLVO - XC90",
        "md": "XC90"
      },
      {
        "mk": "WABA",
        "search": "WABASH - ",
        "md": ""
      },
      {
        "mk": "WARS",
        "search": "WARSZAWA - ",
        "md": ""
      },
      {
        "mk": "WART",
        "search": "WARTBURG - ",
        "md": ""
      },
      {
        "mk": "WARW",
        "search": "WARWICK - ",
        "md": ""
      },
      {
        "mk": "WATF",
        "search": "WATFORD - ",
        "md": ""
      },
      {
        "mk": "WEND",
        "search": "WENDAX - ",
        "md": ""
      },
      {
        "mk": "WEST",
        "search": "WESTERN STAR - ",
        "md": ""
      },
      {
        "mk": "WHIP",
        "search": "WHIPPET - ",
        "md": ""
      },
      {
        "mk": "WLLS",
        "search": "WILLYS - ",
        "md": ""
      },
      {
        "mk": "WILS",
        "search": "WILSON - ",
        "md": ""
      },
      {
        "mk": "WINN",
        "search": "WINNEBEGO - ",
        "md": ""
      },
      {
        "mk": "WOLS",
        "search": "WOLSELEY - ",
        "md": ""
      },
      {
        "mk": "WOOD",
        "search": "WOODILL WILDFIRE - ",
        "md": ""
      },
      {
        "mk": "WORT",
        "search": "WORTHINGTON CHAMP - ",
        "md": ""
      },
      {
        "mk": "YAMA",
        "search": "YAMAHA - ",
        "md": ""
      },
      {
        "mk": "YENK",
        "search": "YENKO - ",
        "md": ""
      },
      {
        "mk": "YLN",
        "search": "YLN (YUE LOONG MOTOR CO.) - ",
        "md": ""
      },
      {
        "mk": "ZAPO",
        "search": "ZAPOROZHETS - ",
        "md": ""
      },
      {
        "mk": "ZARC",
        "search": "ZAR CAR - ",
        "md": ""
      },
      {
        "mk": "ZCZY",
        "search": "ZASTAVIA (ZCZ-YUGOSLAVIA) - YUGO (SERIES)",
        "md": "YUG"
      },
      {
        "mk": "ZETA",
        "search": "ZETA - ",
        "md": ""
      },
      {
        "mk": "ZIL",
        "search": "ZIL - ",
        "md": ""
      },
      {
        "mk": "ZIM",
        "search": "ZIM - ",
        "md": ""
      },
      {
        "mk": "ZIMR",
        "search": "ZIMMERMAN AUTOMOBILES - ",
        "md": ""
      },
      {
        "mk": "ZUND",
        "search": "ZUNDAPP - ",
        "md": ""
      },
      {
        "mk": "ZWIC",
        "search": "ZWICKAU - ",
        "md": ""
      }
    ],
    vehicle_styles: [
      {
        "code": "2DR",
        "name": "2-DOOR SEDAN"
      },
      {
        "code": "3DR",
        "name": "3-DOOR HATCH"
      },
      {
        "code": "4DR",
        "name": "4-DOOR SEDAN"
      },
      {
        "code": "5DR",
        "name": "5-DOOR HATCH"
      },
      {
        "code": "CAMP",
        "name": "CAMPER INCL:CAMPER VANS & MOTORIZED HOMES"
      },
      {
        "code": "CARGO",
        "name": "CARGO (VAN)"
      },
      {
        "code": "CONVER",
        "name": "CONVERTIBLE"
      },
      {
        "code": "DUMP",
        "name": "DUMP"
      },
      {
        "code": "MSCOOT",
        "name": "MOTOR SCOOTER"
      },
      {
        "code": "OTHER",
        "name": "OTHER"
      },
      {
        "code": "PASSEN",
        "name": "PASSENGER (VAN)"
      },
      {
        "code": "PICKUP",
        "name": "PICKUP"
      },
      {
        "code": "PUCREW",
        "name": "PICKUP (CREW CAB)"
      },
      {
        "code": "PUFLAT",
        "name": "PICKUP (FLAT BED)"
      },
      {
        "code": "PUXCAB",
        "name": "PICKUP (EXT. CAB)"
      },
      {
        "code": "STAKE",
        "name": "STAKE"
      },
      {
        "code": "STWGN",
        "name": "STATION WAGON"
      },
      {
        "code": "TANK",
        "name": "TANKER"
      },
      {
        "code": "TRACT",
        "name": "TRACTOR"
      }
    ],
    version: version,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  plugins: plugins
})
