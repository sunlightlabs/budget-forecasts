var balances = [
    [Date.UTC(1995, 0, 1), -163.952],
    [Date.UTC(1996, 0, 1), -107.431],
    [Date.UTC(1997, 0, 1), -21.884],
    [Date.UTC(1998, 0, 1), 69.270],
    [Date.UTC(1999, 0, 1), 125.610],
    [Date.UTC(2000, 0, 1), 236.241],
    [Date.UTC(2001, 0, 1), 128.236],
    [Date.UTC(2002, 0, 1), -157.758],
    [Date.UTC(2003, 0, 1), -377.585],
    [Date.UTC(2004, 0, 1), -412.727],
    [Date.UTC(2005, 0, 1), -318.346],
    [Date.UTC(2006, 0, 1), -248.181],
    [Date.UTC(2007, 0, 1), -160.701],
    [Date.UTC(2008, 0, 1), -458.555],
    [Date.UTC(2009, 0, 1), -1412.686],
    [Date.UTC(2010, 0, 1), -1293.489]
];

var debt = [
    [Date.UTC(2021, 8, 30), null],
    [Date.UTC(2010, 8, 30), 13561623030891.79],
    [Date.UTC(2009, 8, 30), 11909829003511.75],
    [Date.UTC(2008, 8, 30), 10024724896912.49],
    [Date.UTC(2007, 8, 30), 9007653372262.48],
    [Date.UTC(2006, 8, 30), 8506973899215.23],
    [Date.UTC(2005, 8, 30), 7932709661723.50],
    [Date.UTC(2004, 8, 30), 7379052696330.32],
    [Date.UTC(2003, 8, 30), 6783231062743.62],
    [Date.UTC(2002, 8, 30), 6228235965597.16],
    [Date.UTC(2001, 8, 30), 5807463412200.06],
    [Date.UTC(2000, 8, 30), 5674178209886.86],
    [Date.UTC(1999, 8, 30), 5656270901615.43],
    [Date.UTC(1998, 8, 30), 5526193008897.62],
    [Date.UTC(1997, 8, 30), 5413146011397.34],
    [Date.UTC(1996, 8, 30), 5224810939135.73],
    [Date.UTC(1995, 8, 30), 4973982900709.39],
    [Date.UTC(1994, 8, 30), 4692749910013.32],
    [Date.UTC(1994, 0, 1), null]
];

var budgets = {
  Clinton: {
    1996: [[Date.UTC(1995, 0, 1), -192.506], 
           [Date.UTC(1996, 0, 1), -196.671], 
           [Date.UTC(1997, 0, 1), -213.091], 
           [Date.UTC(1998, 0, 1), -196.376], 
           [Date.UTC(1999, 0, 1), -197.446], 
           [Date.UTC(2000, 0, 1), -194.426]],

    1997: [[Date.UTC(1996, 0, 1), -145.636],
           [Date.UTC(1997, 0, 1), -140.091],
           [Date.UTC(1998, 0, 1), -97.952],
           [Date.UTC(1999, 0, 1), -64.403],
           [Date.UTC(2000, 0, 1), -27.549],
           [Date.UTC(2001, 0, 1), 8.265],
           [Date.UTC(2002, 0, 1), 43.902]],

    1998: [[Date.UTC(1997, 0, 1), -125.591],
           [Date.UTC(1998, 0, 1), -120.633],
           [Date.UTC(1999, 0, 1), -117.380],
           [Date.UTC(2000, 0, 1), -87.123],
           [Date.UTC(2001, 0, 1), -36.141],
           [Date.UTC(2002, 0, 1), 16.969]],

    1999: [[Date.UTC(1998, 0, 1), -9.957],
           [Date.UTC(1999, 0, 1), 9.519],
           [Date.UTC(2000, 0, 1), 8.530],
           [Date.UTC(2001, 0, 1), 28.190],
           [Date.UTC(2002, 0, 1), 89.745],
           [Date.UTC(2003, 0, 1), 82.783],
           [Date.UTC(2004, 0, 1), 111.500],
           [Date.UTC(2005, 0, 1), 139.000],
           [Date.UTC(2006, 0, 1), 166.800],
           [Date.UTC(2007, 0, 1), 219.000],
           [Date.UTC(2008, 0, 1), 261.300]],

    2000: [[Date.UTC(1999, 0, 1), 79.263],
           [Date.UTC(2000, 0, 1), 117.305],
           [Date.UTC(2001, 0, 1), 134.100],
           [Date.UTC(2002, 0, 1), 186.745],
           [Date.UTC(2003, 0, 1), 182.042],
           [Date.UTC(2004, 0, 1), 207.623],
           [Date.UTC(2005, 0, 1), 231.000],
           [Date.UTC(2006, 0, 1), 283.000],
           [Date.UTC(2007, 0, 1), 320.000],
           [Date.UTC(2008, 0, 1), 354.000],
           [Date.UTC(2009, 0, 1), 393.000]],

    2001: [[Date.UTC(2000, 0, 1), 166.690],
           [Date.UTC(2001, 0, 1), 183.998],
           [Date.UTC(2002, 0, 1), 185.903],
           [Date.UTC(2003, 0, 1), 184.636],
           [Date.UTC(2004, 0, 1), 194.960],
           [Date.UTC(2005, 0, 1), 215.445],
           [Date.UTC(2006, 0, 1), 256.000],
           [Date.UTC(2007, 0, 1), 292.000],
           [Date.UTC(2008, 0, 1), 314.000],
           [Date.UTC(2009, 0, 1), 329.000],
           [Date.UTC(2010, 0, 1), 363.000]]
  },

  Bush: {
    2002: [[Date.UTC(2001, 0, 1), 280.708],
           [Date.UTC(2002, 0, 1), 231.170],
           [Date.UTC(2003, 0, 1), 242.014],
           [Date.UTC(2004, 0, 1), 262.098],
           [Date.UTC(2005, 0, 1), 269.038],
           [Date.UTC(2006, 0, 1), 304.809],
           [Date.UTC(2007, 0, 1), 34.000],
           [Date.UTC(2008, 0, 1), 373.000],
           [Date.UTC(2009, 0, 1), 420.000],
           [Date.UTC(2010, 0, 1), 465.000],
           [Date.UTC(2011, 0, 1), 526.000]],

    2003: [[Date.UTC(2002, 0, 1), -106.184],
           [Date.UTC(2003, 0, 1), -80.170],
           [Date.UTC(2004, 0, 1), -13.741],
           [Date.UTC(2005, 0, 1), 61.139],
           [Date.UTC(2006, 0, 1), 86.196],
           [Date.UTC(2007, 0, 1), 103.970]],

    2004: [[Date.UTC(2003, 0, 1), -304.159],
           [Date.UTC(2004, 0, 1), -307.400],
           [Date.UTC(2005, 0, 1), -208.211],
           [Date.UTC(2006, 0, 1), -200.504],
           [Date.UTC(2007, 0, 1), -178.149],
           [Date.UTC(2008, 0, 1), -189.594]],

    2005: [[Date.UTC(2004, 0, 1), -520.741],
           [Date.UTC(2005, 0, 1), -363.570],
           [Date.UTC(2006, 0, 1), -267.632],
           [Date.UTC(2007, 0, 1), -241.272],
           [Date.UTC(2008, 0, 1), -238.969],
           [Date.UTC(2009, 0, 1), -237.076]],

    2006: [[Date.UTC(2005, 0, 1), -426.600],
           [Date.UTC(2006, 0, 1), -390.100],
           [Date.UTC(2007, 0, 1), -312.100],
           [Date.UTC(2008, 0, 1), -250.800],
           [Date.UTC(2009, 0, 1), -232.900],
           [Date.UTC(2010, 0, 1), -207.300]],

    2007: [[Date.UTC(2006, 0, 1), -423.186],
           [Date.UTC(2007, 0, 1), -354.245],
           [Date.UTC(2008, 0, 1), -223.334],
           [Date.UTC(2009, 0, 1), -207.553],
           [Date.UTC(2010, 0, 1), -182.708],
           [Date.UTC(2011, 0, 1), -204.908]],

    2008: [[Date.UTC(2007, 0, 1), -244.171],
           [Date.UTC(2008, 0, 1), -239.387],
           [Date.UTC(2009, 0, 1), -187.166],
           [Date.UTC(2010, 0, 1), -94.361],
           [Date.UTC(2011, 0, 1), -53.774],
           [Date.UTC(2012, 0, 1), 61.018]],

    2009: [[Date.UTC(2008, 0, 1), -410.047],
           [Date.UTC(2009, 0, 1), -407.408],
           [Date.UTC(2010, 0, 1), -159.992],
           [Date.UTC(2011, 0, 1), -94.810],
           [Date.UTC(2012, 0, 1), 48.050],
           [Date.UTC(2013, 0, 1), 29.349]]
  },

  Obama: {
    2010: [[Date.UTC(2009, 0, 1), -1841.188],
           [Date.UTC(2010, 0, 1), -1258.431],
           [Date.UTC(2011, 0, 1), -929.416],
           [Date.UTC(2012, 0, 1), -557.419],
           [Date.UTC(2013, 0, 1), -512.322],
           [Date.UTC(2014, 0, 1), -535.896],
           [Date.UTC(2015, 0, 1), -583.000],
           [Date.UTC(2016, 0, 1), -637.000],
           [Date.UTC(2017, 0, 1), -636.000],
           [Date.UTC(2018, 0, 1), -634.000],
           [Date.UTC(2019, 0, 1), -712.000]],

    2011: [[Date.UTC(2010, 0, 1), -1555.582],
           [Date.UTC(2011, 0, 1), -1266.680],
           [Date.UTC(2012, 0, 1), -828.452],
           [Date.UTC(2013, 0, 1), -727.328],
           [Date.UTC(2014, 0, 1), -705.779],
           [Date.UTC(2015, 0, 1), -751.852],
           [Date.UTC(2016, 0, 1), -778.000],
           [Date.UTC(2017, 0, 1), -785.000],
           [Date.UTC(2018, 0, 1), -785.000],
           [Date.UTC(2019, 0, 1), -908.000],
           [Date.UTC(2020, 0, 1), -1003.000]],

    2012: [[Date.UTC(2011, 0, 1), -1645.119],
           [Date.UTC(2012, 0, 1), -1101.237],
           [Date.UTC(2013, 0, 1), -767.531],
           [Date.UTC(2014, 0, 1), -644.553],
           [Date.UTC(2015, 0, 1), -606.730],
           [Date.UTC(2016, 0, 1), -648.703],
           [Date.UTC(2017, 0, 1), -627.000],
           [Date.UTC(2018, 0, 1), -619.000],
           [Date.UTC(2019, 0, 1), -681.000],
           [Date.UTC(2020, 0, 1), -735.000],
           [Date.UTC(2021, 0, 1), -774.000]]
   }
};

