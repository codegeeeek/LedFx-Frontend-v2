import React from 'react'

const WaveLines = ({
backgroundColor = '#030303',
startColor = '#1db954',
stopColor = '#030303',
width=3000,
height=1615,
duration="20s"
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: backgroundColor, display: 'block', zIndex: -1, position:'absolute', opacity: 0.7}} width={width} height={height} preserveAspectRatio="xMidYMid" viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${width/2},${height/2}) scale(1,-1) translate(-${width/2},-${height/2})`}><linearGradient id="wavelines" x1="0" x2="1" y1="0" y2="0">
        <stop stopColor={startColor} offset="0"></stop>
        <stop stopColor={stopColor} offset="1"></stop>
      </linearGradient><path d="" fill="url(#wavelines)" opacity="0.4">
          <animate attributeName="d" dur={duration} repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s" values={`M0 0L 0 678.0663040506684Q 187.5 656.5089408387066  375 608.5301242592661T 750 472.46808333584056T 1125 602.0034795011228T 1500 551.8543395030395T 1875 615.9310318468375T 2250 340.25046463956204T 2625 294.06798157613395T ${width} 401.3047391284752L ${width} 0 Z;M0 0L 0 572.6625989140381Q 187.5 701.4967983856853  375 671.2972435339148T 750 661.5434706869476T 1125 425.93060082427337T 1500 431.41686787116885T 1875 559.6981694955109T 2250 536.4073317324428T 2625 506.3114606793714T ${width} 419.58513139636244L ${width} 0 Z;M0 0L 0 574.910558358432Q 187.5 548.8529002422536  375 512.3628275962079T 750 553.1600983780664T 1125 678.0408232070325T 1500 448.78082561775216T 1875 467.6119670243678T 2250 291.57321777209694T 2625 257.7529144487023T ${width} 315.5832363486409L ${width} 0 Z;M0 0L 0 678.0663040506684Q 187.5 656.5089408387066  375 608.5301242592661T 750 472.46808333584056T 1125 602.0034795011228T 1500 551.8543395030395T 1875 615.9310318468375T 2250 340.25046463956204T 2625 294.06798157613395T ${width} 401.3047391284752L ${width} 0 Z`}></animate>
        </path><path d="" fill="url(#wavelines)" opacity="0.4">
          <animate attributeName="d" dur={duration} repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-0.9523809523809523s" values={`M0 0L 0 547.5244921398938Q 187.5 542.6468405913107  375 512.6120422300088T 750 520.2748817945838T 1125 555.2971449031277T 1500 630.6957411367166T 1875 465.2397849009425T 2250 478.84203101514623T 2625 302.1900440534702T ${width} 412.41476684835135L ${width} 0 Z;M0 0L 0 805.5936624178236Q 187.5 582.8232930253387  375 560.2902059922465T 750 485.7097979161337T 1125 661.8628081473761T 1500 474.04725899939945T 1875 367.803077574558T 2250 573.7139634112334T 2625 497.1964047810817T ${width} 289.98579209100916L ${width} 0 Z;M0 0L 0 548.0275168368934Q 187.5 721.0313853600588  375 686.0064478828835T 750 466.6920610327345T 1125 631.238948189653T 1500 499.3600268344053T 1875 591.1213825899338T 2250 557.7283182397808T 2625 279.0836606779762T ${width} 442.889396137286L ${width} 0 Z;M0 0L 0 547.5244921398938Q 187.5 542.6468405913107  375 512.6120422300088T 750 520.2748817945838T 1125 555.2971449031277T 1500 630.6957411367166T 1875 465.2397849009425T 2250 478.84203101514623T 2625 302.1900440534702T ${width} 412.41476684835135L ${width} 0 Z`}></animate>
        </path><path d="" fill="url(#wavelines)" opacity="0.4">
          <animate attributeName="d" dur={duration} repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-1.9047619047619047s" values={`M0 0L 0 664.1850177088907Q 187.5 524.4869189119225  375 493.50264991054144T 750 675.5030439398979T 1125 415.18875184359223T 1500 387.8134890426991T 1875 561.612987481888T 2250 505.5323230960811T 2625 352.10692730241755T ${width} 429.03049801156743L ${width} 0 Z;M0 0L 0 601.7221802394107Q 187.5 671.0756443726915  375 633.4979631935103T 750 661.9084009763321T 1125 694.7808979231746T 1500 501.284817854725T 1875 518.7712277074359T 2250 565.9994157146581T 2625 366.2649022434898T ${width} 362.18281732977454L ${width} 0 Z;M0 0L 0 716.0327322450205Q 187.5 595.569372140571  375 556.2884151120093T 750 593.0098401621457T 1125 636.6851868849533T 1500 561.6988481068686T 1875 423.0195647384943T 2250 593.4482787188608T 2625 376.9390246013457T ${width} 260.84029335622205L ${width} 0 Z;M0 0L 0 664.1850177088907Q 187.5 524.4869189119225  375 493.50264991054144T 750 675.5030439398979T 1125 415.18875184359223T 1500 387.8134890426991T 1875 561.612987481888T 2250 505.5323230960811T 2625 352.10692730241755T ${width} 429.03049801156743L ${width} 0 Z`}></animate>
        </path><path d="" fill="url(#wavelines)" opacity="0.4">
          <animate attributeName="d" dur={duration} repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-2.8571428571428568s" values={`M0 0L 0 656.269958368834Q 187.5 636.6645478258729  375 597.9229569087314T 750 589.4752189469515T 1125 511.97632187462557T 1500 448.85828240648596T 1875 439.74420403128204T 2250 332.18235817526073T 2625 491.62559874719113T ${width} 498.35811701250026L ${width} 0 Z;M0 0L 0 755.7196436626413Q 187.5 672.9434402576483  375 625.3798731561786T 750 645.1424913755076T 1125 588.0932301693053T 1500 394.3784031810203T 1875 536.236350379975T 2250 487.73073362414334T 2625 565.7275729268961T ${width} 481.6642711668175L ${width} 0 Z;M0 0L 0 720.0409718720259Q 187.5 622.5092851617056  375 583.3273727288689T 750 729.3040626143495T 1125 702.6997687548346T 1500 393.8860309651117T 1875 592.4938333249283T 2250 443.7141604175665T 2625 341.08389200517377T ${width} 516.6595504856689L ${width} 0 Z;M0 0L 0 656.269958368834Q 187.5 636.6645478258729  375 597.9229569087314T 750 589.4752189469515T 1125 511.97632187462557T 1500 448.85828240648596T 1875 439.74420403128204T 2250 332.18235817526073T 2625 491.62559874719113T ${width} 498.35811701250026L ${width} 0 Z`}></animate>
        </path><path d="" fill="url(#wavelines)" opacity="0.4">
          <animate attributeName="d" dur={duration} repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-3.8095238095238093s" values={`M0 0L 0 792.9497830085429Q 187.5 574.7539539243503  375 536.0447741597799T 750 654.6933169872852T 1125 408.0289783671818T 1500 361.4965092910596T 1875 502.87598124339047T 2250 360.0980786483504T 2625 542.8135866665518T ${width} 258.493090209655L ${width} 0 Z;M0 0L 0 570.8691052665881Q 187.5 726.3521516590787  375 696.3921638815109T 750 503.4034390717407T 1125 559.2601543660331T 1500 606.5954032095979T 1875 462.452296894607T 2250 323.7482918776023T 2625 440.37662921797676T ${width} 484.63478356425105L ${width} 0 Z;M0 0L 0 628.67470185446Q 187.5 734.8167005707063  375 696.4723941063324T 750 717.0603234624101T 1125 487.6614680972984T 1500 424.86932559846224T 1875 444.7439859835379T 2250 502.4029739631909T 2625 293.3416583052858T ${width} 206.87528478034812L ${width} 0 Z;M0 0L 0 792.9497830085429Q 187.5 574.7539539243503  375 536.0447741597799T 750 654.6933169872852T 1125 408.0289783671818T 1500 361.4965092910596T 1875 502.87598124339047T 2250 360.0980786483504T 2625 542.8135866665518T ${width} 258.493090209655L ${width} 0 Z`}></animate>
        </path></g>
    </svg>
  )
}

export default WaveLines

