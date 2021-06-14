let info = 'Div,Date,Time,HomeTeam,AwayTeam,FTHG,FTAG,FTR,HTHG,HTAG,HTR,Referee,HS,AS,HST,AST,HF,AF,HC,AC,HY,AY,HR,AR,B365H,B365D,B365A,BWH,BWD,BWA,IWH,IWD,IWA,PSH,PSD,PSA,WHH,WHD,WHA,VCH,VCD,VCA,MaxH,MaxD,MaxA,AvgH,AvgD,AvgA,B365>2.5,B365<2.5,P>2.5,P<2.5,Max>2.5,Max<2.5,Avg>2.5,Avg<2.5,AHh,B365AHH,B365AHA,PAHH,PAHA,MaxAHH,MaxAHA,AvgAHH,AvgAHA,B365CH,B365CD,B365CA,BWCH,BWCD,BWCA,IWCH,IWCD,IWCA,PSCH,PSCD,PSCA,WHCH,WHCD,WHCA,VCCH,VCCD,VCCA,MaxCH,MaxCD,MaxCA,AvgCH,AvgCD,AvgCA,B365C>2.5,B365C<2.5,PC>2.5,PC<2.5,MaxC>2.5,MaxC<2.5,AvgC>2.5,AvgC<2.5,AHCh,B365CAHH,B365CAHA,PCAHH,PCAHA,MaxCAHH,MaxCAHA,AvgCAHH,AvgCAHA';
let keyArr = info.split(',');
console.log(keyArr);
let matchInfo = 'E0,12/09/2020,15:00,Crystal Palace,Southampton,1,0,H,1,0,H,J Moss,5,9,3,5,14,11,7,3,2,1,0,0,3.1,3.25,2.37,3,3.2,2.45,3.15,2.95,2.4,3.32,3.29,2.4,3.2,3.2,2.35,3.2,3.2,2.4,3.36,3.36,2.5,3.18,3.22,2.39,2.2,1.66,2.34,1.68,2.36,1.73,2.24,1.67,0.25,1.85,2.05,1.88,2.05,1.88,2.07,1.84,2.03,3,3.25,2.4,3,3.3,2.4,3.05,2.9,2.45,3.09,3.27,2.54,3.1,3.1,2.45,3.1,3.25,2.45,3.25,3.33,2.55,3.08,3.22,2.47,2.2,1.66,2.26,1.72,2.27,1.78,2.18,1.7,0.25,1.78,2.13,1.79,2.17,1.85,2.18,1.79,2.12';
let matchArr = matchInfo.split(',');

let stats = {
    match1: {

    }
}

keyArr.forEach((stat, i) => {
    stats.match1[stat] = matchArr[i];
})
console.log(stats.match1)

keyArr.forEach(stat => console.log(`${stat}:${stats.match1[stat]}`));