/**
 * ====================================================
 * FeriSmart — Bio-Fertilizer Recipe Data Store (Multilingual)
 * Full translation support for English ('en'), Hindi ('hi'), Telugu ('te')
 * ====================================================
 */

const FERTILIZER_DATA = [
  /* ─── 1. Yeast & Jaggery ───────────────────────────── */
  {
    id: "yeast-jaggery",
    icon: "🧪",
    isMyModel: true,
    baseVolume: 1,
    costLevel: { en: "Very Low", hi: "बहुत कम (₹10/L)", te: "చాలా తక్కువ (₹10/L)" },
    shelfLife: { en: "5–7 days (refrigerated)", hi: "5–7 दिन (फ्रिज में)", te: "5–7 రోజులు (ఫ్రిజ్‌లో)" },
    applicationFrequency: { en: "Every 10–15 days", hi: "हर 10–15 दिनों में", te: "ప్రతి 10–15 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 1:10 with water. Apply 200–250 mL diluted solution per plant.",
      hi: "पानी के साथ 1:10 का घोल बनाएं। प्रति पौधा 200–250 मिली घोल डालें।",
      te: "నీటితో 1:10 నిష్పత్తిలో కలపండి. ఒక్కో మొక్కకు 200–250 మి.లీ పోయండి."
    },

    // Multilingual strings
    lang: {
      en: {
        name: "Yeast & Jaggery Bio-Fertilizer",
        tagline: "FeriSmart prototype — simple, effective microbial powerhouse",
        ingredients: [
          { name: "Active Dry Yeast", amount: 10, unit: "g" },
          { name: "Jaggery (Gur)", amount: 100, unit: "g" },
          { name: "Water (non-chlorinated)", amount: 1, unit: "L" }
        ],
        steps: [
          "Warm 1 L of non-chlorinated water to around 35–40 °C (lukewarm).",
          "Dissolve 100 g jaggery in the warm water and stir until fully dissolved.",
          "Add 10 g active dry yeast and mix gently.",
          "Pour the mixture into a clean plastic bottle; leave the cap slightly loose to allow CO₂ to escape.",
          "Keep in a warm, shaded place for 48 hours. Stir gently once every 12 hours.",
          "After 48 h the liquid should have a pleasant fermented smell. Strain through a cloth.",
          "Dilute 1 part solution in 10 parts water before applying (1:10 ratio).",
          "Apply to soil around the root zone or use as a foliar spray in the early morning."
        ],
        benefits: [
          "Activates beneficial soil microorganisms",
          "Improves nutrient bio-availability (especially phosphorus)",
          "Promotes root growth and seedling vigour",
          "Enhances soil organic carbon",
          "Low-cost, easy to prepare at home"
        ],
        suitableCrops: ["Tomato", "Chilli", "Brinjal", "Leafy Greens", "Beans", "Marigold", "Rice Seedlings"],
        cropCategories: ["Vegetables", "Flowers", "Cereals"],
        nutrients: ["Nitrogen", "Phosphorus", "Micronutrients"],
        precautions: [
          "Use non-chlorinated or de-chlorinated water.",
          "Do not apply undiluted — it can burn roots.",
          "Discard if it smells rotten (indicates anaerobic spoilage)."
        ]
      },

      hi: {
        name: "ईस्ट और गुड़ जैव-उर्वरक",
        tagline: "फेरीस्मार्ट मॉडल — आसान, प्रभावी और सूक्ष्मजीवों का खजाना",
        ingredients: [
          { name: "एक्टिव ड्राई ईस्ट", amount: 10, unit: "ग्राम" },
          { name: "गुड (गुड़)", amount: 100, unit: "ग्राम" },
          { name: "पानी (बिना क्लोरीन वाला)", amount: 1, unit: "लीटर" }
        ],
        steps: [
          "1 लीटर बिना क्लोरीन वाला पानी गुनगुना (35–40 °C) करें।",
          "100 ग्राम गुड़ डालकर पूरी तरह घुलने तक चलाएं।",
          "10 ग्राम एक्टिव ड्राई ईस्ट मिलाएं और धीरे से हिलाएं।",
          "मिश्रण को साफ बोतल में भरें; गैस निकलने के लिए ढक्कन थोड़ा ढीला रखें।",
          "छायादार जगह में 48 घंटे के लिए रखें। हर 12 घंटे में एक बार हिलाएं।",
          "48 घंटे बाद कपड़े से छान लें।",
          "उपयोग से पहले 1 हिस्सा घोल और 10 हिस्सा पानी (1:10 अनुपात) मिलाएं।",
          "पौधों की जड़ों के पास डालें या सुबह के समय पत्तियों पर छिड़कें।"
        ],
        benefits: [
          "मिट्टी के मित्र सूक्ष्मजीवों को सक्रिय करता है",
          "फास्फोरस और पोषक तत्वों की उपलब्धता बढ़ाता है",
          "जड़ों के विकास और पौधे की वृद्धि को तेज करता है",
          "घर पर बनाना बेहद आसान और किफायती"
        ],
        suitableCrops: ["टमाटर", "मिर्च", "बैंगन", "हरी पत्तीदार सब्जियां", "गेंदा", "धान"],
        cropCategories: ["सब्जियां", "फूल", "अनाज"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "सूक्ष्म पोषक"],
        precautions: [
          "बिना क्लोरीन वाले पानी का ही उपयोग करें।",
          "बिना पतला किए सीधे जड़ों में न डालें।"
        ]
      },

      te: {
        name: "ఈస్ట్ మరియు బెల్లం జీవ ఎరువు",
        tagline: "ఫెరిస్మార్ట్ నమూనా — సులువైన, అత్యంత శక్తివంతమైన జీవ ఎరువు",
        ingredients: [
          { name: "యాక్టివ్ డ్రై ఈస్ట్ (Yeast)", amount: 10, unit: "గ్రాములు" },
          { name: "బెల్లం", amount: 100, unit: "గ్రాములు" },
          { name: "మంచినీరు (క్లోరిన్ లేనివి)", amount: 1, unit: "లీటర్" }
        ],
        steps: [
          "1 లీటర్ క్లోరిన్ లేని నీటిని గోరువెచ్చగా (35–40 °C) వేడి చేయండి.",
          "100 గ్రాముల బెల్లం వేసి బాగా కరిగేలా కలపండి.",
          "10 గ్రాముల ఈస్ట్ వేసి మెల్లగా కలపండి.",
          "ప్లాస్టిక్ సీసాలో పోసి, గ్యాస్ బయటకు వెళ్లడానికి మూత కొద్దిగా వదులుగా ఉంచండి.",
          "నీడ ఉన్న ప్రదేశంలో 48 గంటలు ఉంచండి. ప్రతి 12 గంటలకు ఒకసారి కలపండి.",
          "48 గంటల తర్వాత గుడ్డతో వడకట్టండి.",
          "1 భాగం ద్రావణానికి 10 భాగాల నీరు (1:10) కలిపి వాడాలి.",
          "మొక్కల వేర్ల వద్ద లేదా ఉదయాన్నే ఆకులపై పిచికారీ చేయండి."
        ],
        benefits: [
          "నేలలోని ఉపయోగకరమైన సూక్ష్మజీవులను పెంచుతుంది",
          "ఫాస్ఫరస్ మరియు పోషకాలను మొక్కలకు అందేలా చేస్తుంది",
          "వేర్లు మరియు మొక్క ఎదుగుదలను వేగవంతం చేస్తుంది",
          "చాలా తక్కువ ఖర్చుతో ఇంట్లోనే తయారు చేసుకోవచ్చు"
        ],
        suitableCrops: ["టమాటా", "మిరప", "వంకాయ", "ఆకుకూరలు", "బంతి పూలు", "వరి నారు"],
        cropCategories: ["కూరగాయలు", "పూలు", "ధాన్యాలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "సూక్ష్మ పోషకాలు"],
        precautions: [
          "క్లోరిన్ లేని నీటిని మాత్రమే వాడండి.",
          "నీరు కలపకుండా నేరుగా మొక్కలకు పోయవద్దు."
        ]
      }
    }
  },

  /* ─── 2. Jeevamrutham ─────────────────────────────── */
  {
    id: "jeevamrutham",
    icon: "🌿",
    isMyModel: false,
    baseVolume: 200,
    costLevel: { en: "Very Low", hi: "बहुत कम", te: "చాలా తక్కువ" },
    shelfLife: { en: "Use within 7 days", hi: "7 दिनों के भीतर उपयोग करें", te: "7 రోజులలోపు వాడాలి" },
    applicationFrequency: { en: "Every 15 days", hi: "हर 15 दिनों में", te: "ప్రతి 15 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Apply 200 L per acre directly to soil or through drip irrigation.",
      hi: "प्रति एकड़ 200 लीटर मिट्टी में या ड्रिप सिंचाई से दें।",
      te: "ఎకరానికి 200 లీటర్లు నేరుగా నేలలో లేదా డ్రిప్ ద్వారా అందించండి."
    },

    lang: {
      en: {
        name: "Jeevamrutham",
        tagline: "Ancient Indian microbial culture for living soil",
        ingredients: [
          { name: "Fresh Cow Dung", amount: 10, unit: "kg" },
          { name: "Cow Urine", amount: 10, unit: "L" },
          { name: "Jaggery", amount: 2, unit: "kg" },
          { name: "Pulse Flour (besan)", amount: 2, unit: "kg" },
          { name: "Living Soil from Tree Base", amount: 1, unit: "handful" },
          { name: "Water", amount: 200, unit: "L" }
        ],
        steps: [
          "Fill a 200 L barrel with water.",
          "Add 10 kg fresh cow dung and 10 L cow urine; mix well.",
          "Add 2 kg jaggery and 2 kg pulse flour.",
          "Add a handful of living soil from beneath a large tree.",
          "Stir clockwise morning & evening for 3 days.",
          "Ready to use after 3 days. Apply directly to soil."
        ],
        benefits: [
          "Massive boost to soil microbial population",
          "Improves soil structure and water retention",
          "Supplies balanced NPK + micronutrients"
        ],
        suitableCrops: ["All Vegetables", "Paddy", "Sugarcane", "Millets", "Fruit Trees"],
        cropCategories: ["Vegetables", "Cereals", "Fruits"],
        nutrients: ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
        precautions: ["Use fresh cow dung.", "Keep barrel covered with jute cloth."]
      },

      hi: {
        name: "जीवामृत",
        tagline: "सजीव मिट्टी के लिए प्राचीन भारतीय सूक्ष्मजीव घोल",
        ingredients: [
          { name: "ताजा गाय का गोबर", amount: 10, unit: "किग्रा" },
          { name: "गौमूत्र", amount: 10, unit: "लीटर" },
          { name: "गुड़", amount: 2, unit: "किग्रा" },
          { name: "बेसन (दाल का आटा)", amount: 2, unit: "किग्रा" },
          { name: "बरगद/पीपल के नीचे की मिट्टी", amount: 1, unit: "मुट्ठी" },
          { name: "पानी", amount: 200, unit: "लीटर" }
        ],
        steps: [
          "200 लीटर के ड्रम में पानी भरें।",
          "10 किग्रा गोबर और 10 लीटर गौमूत्र मिलाकर चलाएं।",
          "2 किग्रा गुड़ और 2 किग्रा बेसन मिलाएं।",
          "एक मुट्ठी सजीव मिट्टी मिलाएं।",
          "3 दिनों तक सुबह-शाम लकड़ी से घड़ी की दिशा में घुमाएं।",
          "3 दिन बाद जीवामृत तैयार है।"
        ],
        benefits: [
          "मिट्टी में जीवाणुओं की संख्या तेजी से बढ़ाता है",
          "मिट्टी की जल धारण क्षमता में सुधार करता है",
          "सभी फसलों के लिए संतुलित पोषक तत्व प्रदान करता है"
        ],
        suitableCrops: ["सभी सब्जियां", "धान", "गन्ना", "बाजरा", "फलदार पेड़"],
        cropCategories: ["सब्जियां", "अनाज", "फल"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["ताजे गोबर का ही प्रयोग करें।", "ड्रम को जूट के बोरे से ढकें।"]
      },

      te: {
        name: "జీవామృతం",
        tagline: "సజీవ నేల కోసం ప్రాచీన భారతీయ సూక్ష్మజీవుల ద్రావణం",
        ingredients: [
          { name: "తాజా ఆవు పేడ", amount: 10, unit: "కిలోలు" },
          { name: "ఆవు మూత్రం", amount: 10, unit: "లీటర్లు" },
          { name: "బెల్లం", amount: 2, unit: "కిలోలు" },
          { name: "శనగపిండి (లేదా పప్పు పిండి)", amount: 2, unit: "కిలోలు" },
          { name: "మర్రి/రావి చెట్టు కింది పుట్టమన్ను", amount: 1, unit: "పిడికెడు" },
          { name: "నీరు", amount: 200, unit: "లీటర్లు" }
        ],
        steps: [
          "200 లీటర్ల నీటి డ్రమ్ములో నీరు నింపండి.",
          "10 కిలోల పేడ, 10 లీటర్ల ఆవు మూత్రం వేసి కలపండి.",
          "2 కిలోల బెల్లం, 2 కిలోల పిండి వేయండి.",
          "పిడికెడు చెట్టు కింది మన్ను కలపండి.",
          "3 రోజులు ఉదయం, సాయంత్రం సవ్యదిశలో కలపండి.",
          "3 రోజుల తర్వాత జీవామృతం సిద్ధమవుతుంది."
        ],
        benefits: [
          "నేలలో ఉపయోగకరమైన కోట్ల బ్యాక్టీరియాలను వృద్ధి చేస్తుంది",
          "నేల పొరలను గుల్లగా చేసి నీటిని పట్టి ఉంచే శక్తిని పెంచుతుంది",
          "పంటలకు కావలసిన అన్ని రకాల పోషకాలను అందిస్తుంది"
        ],
        suitableCrops: ["అన్ని కూరగాయలు", "వరి", "చెరకు", "జొన్నలు", "పండ్ల తోటలు"],
        cropCategories: ["కూరగాయలు", "ధాన్యాలు", "పండ్లు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["తాజా ఆవు పేడ మాత్రమే వాడాలి.", "డ్రమ్ముపై గోనె సంచి కప్పాలి."]
      }
    }
  },

  /* ─── 3. Panchagavya ──────────────────────────────── */
  {
    id: "panchagavya",
    icon: "🐄",
    isMyModel: false,
    baseVolume: 25,
    costLevel: { en: "Low", hi: "कम", te: "తక్కువ" },
    shelfLife: { en: "3–6 months", hi: "3–6 महीने", te: "3–6 నెలలు" },
    applicationFrequency: { en: "Every 15 days", hi: "हर 15 दिनों में", te: "ప్రతి 15 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 3% (30 mL/L water). Spray 500 L diluted solution per acre.",
      hi: "3% घोल (30 मिली/लीटर पानी) बनाएं। प्रति एकड़ 500 लीटर छिड़कें।",
      te: "3% ద్రావణం (లీటరు నీటికి 30 మి.లీ) కలిపి ఎకరానికి 500 లీటర్లు పిచికారీ చేయండి."
    },

    lang: {
      en: {
        name: "Panchagavya",
        tagline: "Five cow-derived products — traditional organic growth promoter",
        ingredients: [
          { name: "Fresh Cow Dung", amount: 7, unit: "kg" },
          { name: "Cow Urine", amount: 3, unit: "L" },
          { name: "Cow Milk", amount: 2, unit: "L" },
          { name: "Cow Curd (Yoghurt)", amount: 2, unit: "L" },
          { name: "Cow Ghee", amount: 1, unit: "kg" },
          { name: "Jaggery", amount: 3, unit: "kg" },
          { name: "Ripe Banana", amount: 12, unit: "nos" },
          { name: "Tender Coconut Water", amount: 3, unit: "L" },
          { name: "Water", amount: 3, unit: "L" }
        ],
        steps: [
          "Mix cow dung and cow ghee. Stir daily for 3 days.",
          "On Day 4, add cow urine and water.",
          "Add milk, curd, jaggery, mashed bananas, and coconut water.",
          "Stir twice daily for 15 days.",
          "Strain and store in shade."
        ],
        benefits: ["Enhances plant immunity", "Promotes heavy flowering and fruiting", "Improves soil biology"],
        suitableCrops: ["Mango", "Banana", "Coconut", "Vegetables", "Paddy"],
        cropCategories: ["Fruits", "Vegetables", "Cereals"],
        nutrients: ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
        precautions: ["Do not use metal containers.", "Keep covered in shade."]
      },

      hi: {
        name: "पंचगव्य",
        tagline: "गाय के 5 पवित्र द्रव्यों से निर्मित पारंपरिक विकास वर्धक",
        ingredients: [
          { name: "ताजा गाय का गोबर", amount: 7, unit: "किग्रा" },
          { name: "गौमूत्र", amount: 3, unit: "लीटर" },
          { name: "गाय का दूध", amount: 2, unit: "लीटर" },
          { name: "गाय का दही", amount: 2, unit: "लीटर" },
          { name: "गाय का घी", amount: 1, unit: "किग्रा" },
          { name: "गुड़", amount: 3, unit: "किग्रा" },
          { name: "पका केला", amount: 12, unit: "नग" },
          { name: "नारियल पानी", amount: 3, unit: "लीटर" },
          { name: "पानी", amount: 3, unit: "लीटर" }
        ],
        steps: [
          "गोबर और घी को मिलाकर 3 दिन तक रोजाना चलाएं।",
          "चौथे दिन गौमूत्र और पानी मिलाएं।",
          "दूध, दही, गुड़, मथे हुए केले और नारियल पानी मिलाएं।",
          "15 दिनों तक रोजाना सुबह-शाम चलाएं।",
          "छानकर छायादार जगह में रखें।"
        ],
        benefits: ["पौधों में रोगों से लड़ने की क्षमता बढ़ाता है", "फूल और फल झड़ने से रोकता है", "उपज की गुणवत्ता सुधारता है"],
        suitableCrops: ["आम", "केला", "नारियल", "सब्जियां", "धान"],
        cropCategories: ["फल", "सब्जियां", "अनाज"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["धातु के बर्तन का प्रयोग न करें।", "प्लास्टिक या मिट्टी के मटके में बनाएं।"]
      },

      te: {
        name: "పంచగవ్య",
        tagline: "ఆవు ఆధారిత 5 ద్రవ్యాలతో చేసే సాంప్రదాయ పంట దిగుబడి వర్ధకం",
        ingredients: [
          { name: "తాజా ఆవు పేడ", amount: 7, unit: "కిలోలు" },
          { name: "ఆవు మూత్రం", amount: 3, unit: "లీటర్లు" },
          { name: "ఆవు పాలు", amount: 2, unit: "లీటర్లు" },
          { name: "ఆవు పెరుగు", amount: 2, unit: "లీటర్లు" },
          { name: "ఆవు నెయ్యి", amount: 1, unit: "కిలో" },
          { name: "బెల్లం", amount: 3, unit: "కిలోలు" },
          { name: "బాగా పండిన అరటిపండ్లు", amount: 12, unit: "కాయలు" },
          { name: "కొబ్బరి నీళ్లు", amount: 3, unit: "లీటర్లు" },
          { name: "నీరు", amount: 3, unit: "లీటర్లు" }
        ],
        steps: [
          "పేడ, నెయ్యి కలిపి 3 రోజులు ప్రతిరోజూ తిప్పాలి.",
          "4వ రోజు ఆవు మూత్రం, నీరు కలపాలి.",
          "పాలు, పెరుగు, బెల్లం, గుజ్జు చేసిన అరటిపండ్లు, కొబ్బరి నీళ్లు కలపాలి.",
          "15 రోజులు ఉదయం, సాయంత్రం తిప్పాలి.",
          "వడకట్టి నీడలో నిల్వ చేయాలి."
        ],
        benefits: ["మొక్కలకు తెగుళ్ల నిరోధక శక్తిని ఇస్తుంది", "పూత, కాత విపరీతంగా వస్తుంది", "పండ్ల రుచి, పరిమాణం పెరుగుతుంది"],
        suitableCrops: ["మామిడి", "అరటి", "కొబ్బరి", "కూరగాయలు", "వరి"],
        cropCategories: ["పండ్లు", "కూరగాయలు", "ధాన్యాలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["ఇత్తడి, రాగి పాత్రలు వాడకూడదు.", "ప్లాస్టిక్ బకెట్ లేదా కుండ వాడాలి."]
      }
    }
  },

  /* ─── 4. Fish Amino Acid (FAA) ─────────────────────── */
  {
    id: "fish-amino-acid",
    icon: "🐟",
    isMyModel: false,
    baseVolume: 1,
    costLevel: { en: "Low", hi: "कम", te: "తక్కువ" },
    shelfLife: { en: "6–12 months", hi: "6–12 महीने", te: "6–12 నెలలు" },
    applicationFrequency: { en: "Every 15–20 days", hi: "हर 15–20 दिनों में", te: "ప్రతి 15–20 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 2–5 mL per litre of water for foliar spray.",
      hi: "प्रति लीटर पानी में 2–5 मिली मिलाकर छिड़काव करें।",
      te: "లీటరు నీటికి 2–5 మి.లీ కలిపి ఆకులపై పిచికారీ చేయండి."
    },

    lang: {
      en: {
        name: "Fish Amino Acid (FAA)",
        tagline: "Protein-rich liquid fertilizer for high nitrogen supply",
        ingredients: [
          { name: "Fresh Fish Waste", amount: 1, unit: "kg" },
          { name: "Jaggery / Brown Sugar", amount: 1, unit: "kg" }
        ],
        steps: [
          "Chop fish waste and mix with jaggery 1:1 by weight.",
          "Store in an airtight container for 15–20 days.",
          "Extract dark liquid from bottom, dilute 2–5 mL/L."
        ],
        benefits: ["High organic nitrogen booster", "Promotes rich green leaf foliage"],
        suitableCrops: ["Leafy Greens", "Cabbage", "Paddy", "Maize"],
        cropCategories: ["Vegetables", "Cereals"],
        nutrients: ["Nitrogen", "Phosphorus", "Micronutrients"],
        precautions: ["Store away from living rooms due to strong odour."]
      },

      hi: {
        name: "फिश अमीनो एसिड (FAA)",
        tagline: "नाइट्रोजन से भरपूर प्रोटीन युक्त तरल जैविक खाद",
        ingredients: [
          { name: "ताजा मछली का कचरा", amount: 1, unit: "किग्रा" },
          { name: "गुड़ / भूरी चीनी", amount: 1, unit: "किग्रा" }
        ],
        steps: [
          "मछली के टुकड़ों और गुड़ को 1:1 के अनुपात में बर्तन में भरें।",
          "15–20 दिनों के लिए छायादार स्थान पर रखें।",
          "निचोड़कर निकला भूरा तरल छान लें।"
        ],
        benefits: ["पत्तियों को गहरा हरा और चमकदार बनाता है", "नाइट्रोजन की कमी तुरंत दूर करता है"],
        suitableCrops: ["पालक", "गोभी", "धान", "मक्का"],
        cropCategories: ["सब्जियां", "अनाज"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "सूक्ष्म पोषक"],
        precautions: ["तेज गंध होती है, कमरे से दूर रखें।"]
      },

      te: {
        name: "ఫిష్ అమినో యాసిడ్ (FAA)",
        tagline: "నత్రజని (నైట్రోజన్) అధికంగా ఉండే చేపల ద్రవ ఎరువు",
        ingredients: [
          { name: "తాజా చేప వ్యర్థాలు", amount: 1, unit: "కిలో" },
          { name: "బెల్లం / నల్ల బెల్లం", amount: 1, unit: "కిలో" }
        ],
        steps: [
          "చేప వ్యర్థాలు, బెల్లం 1:1 నిష్పత్తిలో పాత్రలో పొరలుగా వేయాలి.",
          "15–20 రోజులు నీడలో ఉంచాలి.",
          "తయారైన ద్రవాన్ని వడకట్టి సీసాలో నిల్వ చేయాలి."
        ],
        benefits: ["ఆకులు బాగా ఏపుగా, పచ్చగా పెరుగుతాయి", "నత్రజని లోపాన్ని వెంటనే నివారిస్తుంది"],
        suitableCrops: ["ఆకుకూరలు", "క్యాబేజీ", "వరి", "జొన్న"],
        cropCategories: ["కూరగాయలు", "ధాన్యాలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "సూక్ష్మ పోషకాలు"],
        precautions: ["వాసన ఎక్కువగా ఉంటుంది కాబట్టి బయట ఉంచండి."]
      }
    }
  },

  /* ─── 5. Banana Peel Fertilizer ────────────────────── */
  {
    id: "banana-peel",
    icon: "🍌",
    isMyModel: false,
    baseVolume: 1,
    costLevel: { en: "Free", hi: "मुफ्त", te: "ఉచితం" },
    shelfLife: { en: "3–5 days", hi: "3–5 दिन", te: "3–5 రోజులు" },
    applicationFrequency: { en: "Every 7–10 days", hi: "हर 7–10 दिनों में", te: "ప్రతి 7–10 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Apply 200–300 mL per plant around root zone.",
      hi: "प्रति पौधा 200–300 मिली जड़ों के पास डालें।",
      te: "మొక్క మొదట్లో 200–300 మి.లీ పోయండి."
    },

    lang: {
      en: {
        name: "Banana Peel Fertilizer",
        tagline: "Potassium-rich liquid tonic for heavy flowering & fruiting",
        ingredients: [
          { name: "Banana Peels", amount: 4, unit: "nos" },
          { name: "Water", amount: 1, unit: "L" }
        ],
        steps: [
          "Chop 4 banana peels into water.",
          "Soak for 48 hours.",
          "Strain and water plants directly."
        ],
        benefits: ["Boosts potassium for bigger flowers and sweet fruits"],
        suitableCrops: ["Rose", "Tomato", "Chilli", "Strawberry"],
        cropCategories: ["Vegetables", "Fruits", "Flowers"],
        nutrients: ["Potassium", "Micronutrients"],
        precautions: ["Use fresh for best results."]
      },

      hi: {
        name: "केले के छिलके का उर्वरक",
        tagline: "पोटाशियम से भरपूर फूलों और फलों के लिए टॉनिक",
        ingredients: [
          { name: "केले के छिलके", amount: 4, unit: "नग" },
          { name: "पानी", amount: 1, unit: "लीटर" }
        ],
        steps: [
          "4 केले के छिलके छोटे टुकड़ों में काटें।",
          "1 लीटर पानी में 48 घंटे के लिए भिगोएं।",
          "छानकर पौधों की जड़ों में डालें।"
        ],
        benefits: ["फूलों और फलों की संख्या और आकार बढ़ाता है"],
        suitableCrops: ["गुलाब", "टमाटर", "मिर्च", "स्ट्रॉबेरी"],
        cropCategories: ["सब्जियां", "फल", "फूल"],
        nutrients: ["पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["ताजा ही प्रयोग करें।"]
      },

      te: {
        name: "అరటి తొక్కల ద్రవ ఎరువు",
        tagline: "పొటాషియం సమృద్ధిగా ఉండే పూత, కాత ద్రవ ఎరువు",
        ingredients: [
          { name: "అరటి తొక్కలు", amount: 4, unit: "తొక్కలు" },
          { name: "నీరు", amount: 1, unit: "లీటర్" }
        ],
        steps: [
          "4 అరటి తొక్కలను చిన్న ముక్కలుగా కోసి నీటిలో వేయండి.",
          "48 గంటలు నాననివ్వండి.",
          "వడకట్టి మొక్కల వేర్ల వద్ద పోయండి."
        ],
        benefits: ["పువ్వులు రాలకుండా పెద్దగా పూసేలా చేస్తుంది", "పండ్లు తీపిగా, పెద్దవిగా మారతాయి"],
        suitableCrops: ["గులాబీ", "టమాటా", "మిరప", "స్ట్రాబెర్రీ"],
        cropCategories: ["కూరగాయలు", "పండ్లు", "పూలు"],
        nutrients: ["పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["తాజాగా తయారు చేసి వాడడం మంచిది."]
      }
    }
  },

  /* ─── 6. Compost Tea ───────────────────────────────── */
  {
    id: "compost-tea",
    icon: "🍵",
    isMyModel: false,
    baseVolume: 10,
    costLevel: { en: "Very Low", hi: "बहुत कम", te: "చాలా తక్కువ" },
    shelfLife: { en: "Use within 4–6 hours", hi: "4–6 घंटे के भीतर उपयोग करें", te: "4–6 గంటలలోపు వాడాలి" },
    applicationFrequency: { en: "Every 7–14 days", hi: "हर 7–14 दिनों में", te: "ప్రతి 7–14 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Apply undiluted to soil or dilute 1:5 for foliar spray.",
      hi: "सीधे मिट्टी में डालें या 1:5 पानी मिलाकर पत्तियों पर छिड़कें।",
      te: "నేరుగా వేర్లకు పోయవచ్చు లేదా 1:5 నీరు కలిపి ఆకులపై పిచికారీ చేయవచ్చు."
    },

    lang: {
      en: {
        name: "Compost Tea",
        tagline: "Brewed liquid gold packed with beneficial aerobic microbes",
        ingredients: [
          { name: "Matured Vermicompost", amount: 2, unit: "kg" },
          { name: "Water", amount: 10, unit: "L" },
          { name: "Jaggery", amount: 50, unit: "g" }
        ],
        steps: ["Steep compost in water for 24–48 h.", "Aerate or stir frequently.", "Apply fresh."],
        benefits: ["Suppresses fungal leaf diseases", "Enhances microbial diversity"],
        suitableCrops: ["All Vegetables", "Fruit Trees", "Lawns"],
        cropCategories: ["Vegetables", "Fruits"],
        nutrients: ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
        precautions: ["Apply within hours of brewing for maximum microbial activity."]
      },

      hi: {
        name: "कंपोस्ट टी (खाद की चाय)",
        tagline: "सजीव जीवाणुओं से भरपूर तरल जैविक टॉनिक",
        ingredients: [
          { name: "वर्मीकंपोस्ट (केंचुआ खाद)", amount: 2, unit: "किग्रा" },
          { name: "पानी", amount: 10, unit: "लीटर" },
          { name: "गुड़", amount: 50, unit: "ग्राम" }
        ],
        steps: ["कपड़े की पोटली में खाद भरकर पानी में 24-48 घंटे भिगोएं।", "अच्छी तरह हिलाएं।", "ताजा ही प्रयोग करें।"],
        benefits: ["पत्तियों के फंगल रोगों से बचाता है", "मिट्टी की उर्वरता बढ़ाता है"],
        suitableCrops: ["सभी सब्जियां", "फलदार पौधे"],
        cropCategories: ["सब्जियां", "फल"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["बनने के तुरंत बाद इस्तेमाल करें।"]
      },

      te: {
        name: "కంపోస్ట్ టీ",
        tagline: "మంచి బ్యాక్టీరియాలతో నిండిన ద్రవ కంపోస్ట్ సారం",
        ingredients: [
          { name: "వానపాముల ఎరువు (వర్మీకంపోస్ట్)", amount: 2, unit: "కిలోలు" },
          { name: "నీరు", amount: 10, unit: "లీటర్లు" },
          { name: "బెల్లం", amount: 50, unit: "గ్రాములు" }
        ],
        steps: ["ఎరువును సంచిలో కట్టి నీటిలో 24-48 గంటలు నానబెట్టాలి.", "బాగా తిప్పాలి.", "వెంటనే వాడాలి."],
        benefits: ["ఫంగస్ తెగుళ్ల నుండి ఆకులను కాపాడుతుంది", "నేలలో జీవశక్తిని పెంచుతుంది"],
        suitableCrops: ["అన్ని కూరగాయలు", "పండ్ల తోటలు"],
        cropCategories: ["కూరగాయలు", "పండ్లు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["తయారైన 4-6 గంటలలోపే వాడాలి."]
      }
    }
  },

  /* ─── 7. Vermiwash ─────────────────────────────────── */
  {
    id: "vermiwash",
    icon: "🪱",
    isMyModel: false,
    baseVolume: 5,
    costLevel: { en: "Low", hi: "कम", te: "తక్కువ" },
    shelfLife: { en: "7–10 days", hi: "7–10 दिन", te: "7–10 రోజులు" },
    applicationFrequency: { en: "Every 7–10 days", hi: "हर 7–10 दिनों में", te: "ప్రతి 7–10 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 1:5 to 1:10 with water before root drench or foliar spray.",
      hi: "पानी के साथ 1:5 से 1:10 का घोल बनाकर छिड़कें।",
      te: "1:5 నుండి 1:10 నిష్పత్తిలో నీరు కలిపి పిచికారీ చేయండి."
    },

    lang: {
      en: {
        name: "Vermiwash",
        tagline: "Natural growth hormones and enzymes extracted from worm beds",
        ingredients: [
          { name: "Active Vermicompost Unit", amount: 1, unit: "unit" },
          { name: "Water", amount: 5, unit: "L" }
        ],
        steps: ["Drip water slowly through active worm bed.", "Collect leachate liquid.", "Dilute 1:5 before spray."],
        benefits: ["Contains plant hormones (auxins, cytokinins)", "Speeds up seed germination"],
        suitableCrops: ["Tomato", "Cucumber", "Spinach", "Ornamentals"],
        cropCategories: ["Vegetables", "Flowers"],
        nutrients: ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
        precautions: ["Keep worm bin moist."]
      },

      hi: {
        name: "वर्मीवाश",
        tagline: "केंचुआ बेड से प्राप्त प्राकृतिक ग्रोथ हार्मोन युक्त अर्क",
        ingredients: [
          { name: "केंचुआ कंपोस्ट यूनिट", amount: 1, unit: "इकाई" },
          { name: "पानी", amount: 5, unit: "लीटर" }
        ],
        steps: ["केंचुआ बेड से पानी धीरे-धीरे रिसाकर नीचे से इकट्ठा करें।", "1:5 पानी मिलाकर छिड़कें।"],
        benefits: ["प्राकृतिक ग्रोथ हार्मोन प्रदान करता है", "अंकुरण दर बढ़ाता है"],
        suitableCrops: ["टमाटर", "खीरा", "पालक", "फूल वाले पौधे"],
        cropCategories: ["सब्जियां", "फूल"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["हमेशा पतला करके ही प्रयोग करें।"]
      },

      te: {
        name: "వర్మివాష్",
        tagline: "వానపాముల తొట్టి నుండి లభించే సహజ గ్రోత్ హార్మోన్ ద్రవం",
        ingredients: [
          { name: "వానపాముల ఎరువుల తొట్టి", amount: 1, unit: "యూనిట్" },
          { name: "నీరు", amount: 5, unit: "లీటర్లు" }
        ],
        steps: ["వానపాముల తొట్టి గుండా నీటిని నెమ్మదిగా పంపి అడుగున ద్రవాన్ని సేకరించాలి.", "1:5 నీరు కలిపి పిచికారీ చేయాలి."],
        benefits: ["మొక్కల హార్మోన్లు (ఆక్సిన్లు) కలిగి ఉంటుంది", "విత్తన మొలక శాతాన్ని పెంచుతుంది"],
        suitableCrops: ["టమాటా", "దోస", "పాలకూర", "అలంకరణ మొక్కలు"],
        cropCategories: ["కూరగాయలు", "పూలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["నీరు కలిపిన తర్వాతే వాడాలి."]
      }
    }
  },

  /* ─── 8. Rice Wash Bio-Fertilizer ──────────────────── */
  {
    id: "rice-wash",
    icon: "🍚",
    isMyModel: false,
    baseVolume: 1,
    costLevel: { en: "Free", hi: "मुफ्त", te: "ఉచితం" },
    shelfLife: { en: "3–5 days", hi: "3–5 दिन", te: "3–5 రోజులు" },
    applicationFrequency: { en: "Every 5–7 days", hi: "हर 5–7 दिनों में", te: "ప్రతి 5–7 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Apply undiluted 100–200 mL per plant.",
      hi: "बिना पानी मिलाए 100–200 मिली प्रति पौधा डालें।",
      te: "నీరు కలపకుండా మొక్కకు 100–200 మి.లీ పోయండి."
    },

    lang: {
      en: {
        name: "Rice Wash Bio-Fertilizer",
        tagline: "Fermented rice rinsing water — zero-waste kitchen tonic",
        ingredients: [
          { name: "Rice (first wash water)", amount: 200, unit: "g" },
          { name: "Water", amount: 1, unit: "L" }
        ],
        steps: ["Collect milky rice wash water.", "Ferment loosely covered for 2–3 days.", "Apply to soil."],
        benefits: ["Rich in B-vitamins and starch for beneficial bacteria"],
        suitableCrops: ["Indoor Plants", "Leafy Greens", "Herbs"],
        cropCategories: ["Vegetables", "Flowers"],
        nutrients: ["Nitrogen", "Phosphorus", "Micronutrients"],
        precautions: ["Use first wash water for maximum density."]
      },

      hi: {
        name: "चावल के पानी की खाद",
        tagline: "चावल धोने के पानी से बना प्राकृतिक टॉनिक",
        ingredients: [
          { name: "चावल का धोवन (पहला पानी)", amount: 200, unit: "ग्राम" },
          { name: "पानी", amount: 1, unit: "लीटर" }
        ],
        steps: ["चावल धोने का सफेद पानी इकट्ठा करें।", "2-3 दिन बर्तन में रखें।", "सीधे पौधों में डालें।"],
        benefits: ["विटामिन-B से भरपूर, मिट्टी के मित्र जीवाणु बढ़ाता है"],
        suitableCrops: ["इनडोर पौधे", "हरी सब्जियां", "तुलसी/जड़ी-बूटियां"],
        cropCategories: ["सब्जियां", "फूल"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "सूक्ष्म पोषक"],
        precautions: ["एक सप्ताह से अधिक पुराना प्रयोग न करें।"]
      },

      te: {
        name: "బియ్యం కడిగిన నీటి ఎరువు",
        tagline: "బియ్యం కడిగిన నీటితో చేసే ఉచిత సేంద్రీయ ద్రవం",
        ingredients: [
          { name: "బియ్యం (మొదటిసారి కడిగిన నీరు)", amount: 200, unit: "గ్రాములు" },
          { name: "నీరు", amount: 1, unit: "లీటర్" }
        ],
        steps: ["బియ్యం కడిగిన తెల్లటి నీటిని సేకరించండి.", "2-3 రోజులు పాత్రలో ఉంచండి.", "మొక్కల మొదళ్లలో పోయండి."],
        benefits: ["బి-విటమిన్లు మరియు పిండిపదార్థాలు అందిస్తుంది"],
        suitableCrops: ["ఇంటి లోపలి మొక్కలు", "ఆకుకూరలు", "మొక్కలు"],
        cropCategories: ["కూరగాయలు", "పూలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "సూక్ష్మ పోషకాలు"],
        precautions: ["ఎక్కువ రోజులు నిల్వ ఉంచవద్దు."]
      }
    }
  },

  /* ─── 9. Eggshell Calcium Solution ─────────────────── */
  {
    id: "eggshell-calcium",
    icon: "🥚",
    isMyModel: false,
    baseVolume: 1,
    costLevel: { en: "Very Low", hi: "बहुत कम", te: "చాలా తక్కువ" },
    shelfLife: { en: "30 days", hi: "30 दिन", te: "30 రోజులు" },
    applicationFrequency: { en: "Every 14–21 days", hi: "हर 14–21 दिनों में", te: "ప్రతి 14–21 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Apply 200 mL per plant at root zone.",
      hi: "प्रति पौधा 200 मिली जड़ों में डालें।",
      te: "మొక్క మొదట్లో 200 మి.లీ పోయండి."
    },

    lang: {
      en: {
        name: "Eggshell Calcium Solution",
        tagline: "Bio-available soluble calcium for sturdy stems & fruit rotting prevention",
        ingredients: [
          { name: "Dried Eggshells (crushed)", amount: 50, unit: "g" },
          { name: "Vinegar", amount: 200, unit: "mL" },
          { name: "Water", amount: 1, unit: "L" }
        ],
        steps: ["Dissolve crushed eggshells in vinegar for 48 h.", "Add 1 L water.", "Apply to root zone."],
        benefits: ["Prevents blossom-end rot in tomatoes & peppers", "Strengthens plant cell walls"],
        suitableCrops: ["Tomato", "Pepper", "Brinjal", "Roses"],
        cropCategories: ["Vegetables", "Fruits", "Flowers"],
        nutrients: ["Micronutrients"],
        precautions: ["Do not spray on leaves directly."]
      },

      hi: {
        name: "अंडे के छिलके का कैल्शियम घोल",
        tagline: "टमाटर और सब्जियों में फल सड़न रोकने वाला कैल्शियम टॉनिक",
        ingredients: [
          { name: "अंडे के सूखे छिलके (पिसे हुए)", amount: 50, unit: "ग्राम" },
          { name: "सिरका (Vinegar)", amount: 200, unit: "मिली" },
          { name: "पानी", amount: 1, unit: "लीटर" }
        ],
        steps: ["पिसे छिलकों को सिरके में 48 घंटे भिगोएं।", "1 लीटर पानी मिलाएं।", "जड़ों में डालें।"],
        benefits: ["टमाटर के नीचे से सड़ने की समस्या रोकता है", "पौधे के तने मजबूत करता है"],
        suitableCrops: ["टमाटर", "मिर्च", "बैंगन", "गुलाब"],
        cropCategories: ["सब्जियां", "फल", "फूल"],
        nutrients: ["सूक्ष्म पोषक"],
        precautions: ["पत्तियों पर न छिड़कें।"]
      },

      te: {
        name: "కోడిగుడ్డు పెంకుల కాల్సియం ద్రవము",
        tagline: "టమాటా, మిరపలో కాయ కుళ్ళు నివారించే కాల్సియం ద్రవం",
        ingredients: [
          { name: "ఎండబెట్టిన గుడ్డు పెంకులు (పొడి)", amount: 50, unit: "గ్రాములు" },
          { name: "వెనిగర్ (Vinegar)", amount: 200, unit: "మి.లీ" },
          { name: "నీరు", amount: 1, unit: "లీటర్" }
        ],
        steps: ["గుడ్డు పెంకుల పొడిని వెనిగర్‌లో 48 గంటలు నానబెట్టాలి.", "1 లీటరు నీరు కలపాలి.", "వేర్లకు పోయాలి."],
        benefits: ["కాయ కుళ్ళు వ్యాధి రాకుండా కాపాడుతుంది", "మొక్కల కాండం దృఢంగా మారుతుంది"],
        suitableCrops: ["టమాటా", "మిరప", "వంకాయ", "గులాబీ"],
        cropCategories: ["కూరగాయలు", "పండ్లు", "పూలు"],
        nutrients: ["సూక్ష్మ పోషకాలు"],
        precautions: ["ఆకులపై పిచికారీ చేయవద్దు."]
      }
    }
  },

  /* ─── 10. Seaweed Extract ──────────────────────────── */
  {
    id: "seaweed-extract",
    icon: "🌊",
    isMyModel: false,
    baseVolume: 5,
    costLevel: { en: "Low", hi: "कम", te: "తక్కువ" },
    shelfLife: { en: "3–6 months", hi: "3–6 महीने", te: "3–6 నెలలు" },
    applicationFrequency: { en: "Every 15–20 days", hi: "हर 15–20 दिनों में", te: "ప్రతి 15–20 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 1:10 with water. Spray 300–500 L per acre.",
      hi: "1:10 पानी मिलाकर प्रति एकड़ 300–500 लीटर छिड़कें।",
      te: "1:10 నీరు కలిపి ఎకరానికి 300–500 లీటర్లు పిచికారీ చేయండి."
    },

    lang: {
      en: {
        name: "Seaweed Extract",
        tagline: "Ocean mineral booster packed with cytokinins & stress tolerance enzymes",
        ingredients: [
          { name: "Seaweed", amount: 500, unit: "g" },
          { name: "Water", amount: 5, unit: "L" }
        ],
        steps: ["Rinse salt from seaweed.", "Soak in water for 2–3 weeks.", "Strain and dilute 1:10."],
        benefits: ["Boosts drought and heat tolerance", "Increases fruit size and sweetness"],
        suitableCrops: ["Grapes", "Mango", "Tomato", "Potato"],
        cropCategories: ["Fruits", "Vegetables", "Cereals"],
        nutrients: ["Potassium", "Micronutrients"],
        precautions: ["Rinse salt off raw seaweed thoroughly."]
      },

      hi: {
        name: "समुद्री शैवाल का अर्क (Seaweed Extract)",
        tagline: "समुद्री खनिजों और स्ट्रेस से बचाने वाला जैविक टॉनिक",
        ingredients: [
          { name: "समुद्री शैवाल", amount: 500, unit: "ग्राम" },
          { name: "पानी", amount: 5, unit: "लीटर" }
        ],
        steps: ["शैवाल से नमक धोएं।", "5 लीटर पानी में 2-3 सप्ताह भिगोएं।", "छानकर 1:10 में छिड़कें।"],
        benefits: ["सूखा और गर्मी सहन करने की क्षमता बढ़ाता है", "फलों की मिठास और चमक बढ़ाता है"],
        suitableCrops: ["अंगूर", "आम", "टमाटर", "आलू"],
        cropCategories: ["फल", "सब्जियां", "अनाज"],
        nutrients: ["पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["नमक अच्छी तरह से धो लें।"]
      },

      te: {
        name: "సముద్ర పాచి సారం (Seaweed Extract)",
        tagline: "సముద్ర ఖనిజాలు మరియు వాతావరణ తట్టుకునే శక్తినిచ్చే ద్రవం",
        ingredients: [
          { name: "సముద్ర పాచి (Seaweed)", amount: 500, unit: "గ్రాములు" },
          { name: "నీరు", amount: 5, unit: "లీటర్లు" }
        ],
        steps: ["ఉప్పు పోయేలా కడగాలి.", "5 లీటర్ల నీటిలో 2-3 వారాలు నానబెట్టాలి.", "వడకట్టి 1:10 నీటితో పిచికారీ చేయాలి."],
        benefits: ["ఎండ తీవ్రతను, వర్షాభావ పరిస్థితులను తట్టుకునేలా చేస్తుంది", "దిగుబడి నాణ్యత పెరుగుతుంది"],
        suitableCrops: ["ద్రాక్ష", "మామిడి", "టమాటా", "బంగాళదుంప"],
        cropCategories: ["పండ్లు", "కూరగాయలు", "ధాన్యాలు"],
        nutrients: ["పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["ఉప్పు బాగా కడిగి తీసివేయాలి."]
      }
    }
  },

  /* ─── 11. Cow Dung Microbial Solution ──────────────── */
  {
    id: "cow-dung-microbial",
    icon: "💩",
    isMyModel: false,
    baseVolume: 10,
    costLevel: { en: "Very Low", hi: "बहुत कम", te: "చాలా తక్కువ" },
    shelfLife: { en: "7 days", hi: "7 दिन", te: "7 రోజులు" },
    applicationFrequency: { en: "Every 15–20 days", hi: "हर 15–20 दिनों में", te: "ప్రతి 15–20 రోజులకు ఒకసారి" },
    applicationDosage: {
      en: "Dilute 1:5 with water. Apply 500 L diluted solution per acre.",
      hi: "1:5 पानी मिलाकर प्रति एकड़ 500 लीटर मिट्टी में दें।",
      te: "1:5 నీరు కలిపి ఎకరానికి 500 లీటర్లు నేలలో పోయండి."
    },

    lang: {
      en: {
        name: "Cow Dung Microbial Solution",
        tagline: "Simple fermented slurry rich in nitrogen-fixing bacteria",
        ingredients: [
          { name: "Fresh Cow Dung", amount: 1, unit: "kg" },
          { name: "Jaggery", amount: 100, unit: "g" },
          { name: "Water", amount: 10, unit: "L" }
        ],
        steps: ["Mix dung, jaggery and water.", "Ferment for 3–5 days.", "Strain and dilute 1:5."],
        benefits: ["Improves organic carbon", "Activates beneficial soil earthworms"],
        suitableCrops: ["Paddy", "Sugarcane", "Banana", "Coconut"],
        cropCategories: ["Cereals", "Fruits", "Vegetables"],
        nutrients: ["Nitrogen", "Phosphorus", "Potassium", "Micronutrients"],
        precautions: ["Use fresh dung from healthy cattle."]
      },

      hi: {
        name: "गोबर सूक्ष्मजीव घोल",
        tagline: "नाइट्रोजन स्थिरीकरण जीवाणुओं से भरपूर गोबर घोल",
        ingredients: [
          { name: "ताजा गाय का गोबर", amount: 1, unit: "किग्रा" },
          { name: "गुड़", amount: 100, unit: "ग्राम" },
          { name: "पानी", amount: 10, unit: "लीटर" }
        ],
        steps: ["गोबर, गुड़ और पानी मिलाएं।", "3-5 दिन छाया में रखें।", "छानकर 1:5 पानी मिलाकर डालें।"],
        benefits: ["मिट्टी की जैविक संरचना सुधारता है", "केंचुआ गतिविधि बढ़ाता है"],
        suitableCrops: ["धान", "गन्ना", "केला", "नारियल"],
        cropCategories: ["अनाज", "फल", "सब्जियां"],
        nutrients: ["नाइट्रोजन", "फास्फोरस", "पोटाशियम", "सूक्ष्म पोषक"],
        precautions: ["ताजे गोबर का प्रयोग करें।"]
      },

      te: {
        name: "ఆవు పేడ సూక్ష్మజీవుల ద్రవము",
        tagline: "నేలలో నత్రజనిని పెంచే పేడ ద్రవ ఎరువు",
        ingredients: [
          { name: "తాజా ఆవు పేడ", amount: 1, unit: "కిలో" },
          { name: "బెల్లం", amount: 100, unit: "గ్రాములు" },
          { name: "నీరు", amount: 10, unit: "లీటర్లు" }
        ],
        steps: ["పేడ, బెల్లం, నీరు కలపండి.", "3-5 రోజులు నీడలో ఉంచండి.", "వడకట్టి 1:5 నీటితో వాడండి."],
        benefits: ["నేల సేంద్రీయ కర్బనాన్ని పెంచుతుంది", "వానపాముల సంఖ్యను పెంచుతుంది"],
        suitableCrops: ["వరి", "చెరకు", "అరటి", "కొబ్బరి"],
        cropCategories: ["ధాన్యాలు", "పండ్లు", "కూరగాయలు"],
        nutrients: ["నత్రజని (నైట్రోజన్)", "భాస్వరం (ఫాస్ఫరస్)", "పొటాషియం", "సూక్ష్మ పోషకాలు"],
        precautions: ["తాజా ఆవు పేడ మాత్రమే వాడాలి."]
      }
    }
  }
];

/* ─── Multilingual FAQ Data ─────────────────────────── */
const FAQ_DATA_I18N = {
  en: [
    {
      question: "What are liquid bio-fertilizers?",
      answer: "Liquid bio-fertilizers are nutrient-rich solutions prepared by fermenting organic materials (such as cow dung, plant waste, yeast, or jaggery) in water. They contain beneficial microorganisms — bacteria, fungi, and yeasts — that improve soil health, promote nutrient uptake, and enhance plant growth naturally."
    },
    {
      question: "Why is yeast used in bio-fertilizers?",
      answer: "Yeast (Saccharomyces cerevisiae) is a powerhouse microorganism. During fermentation it produces CO₂, organic acids, B-vitamins, and enzymes that stimulate root growth and help solubilise phosphorus in the soil."
    },
    {
      question: "Why is jaggery (gur) used as an ingredient?",
      answer: "Jaggery serves as a carbon and energy source for microorganisms. Its natural sugars fuel the fermentation process, allowing beneficial microbes to multiply rapidly."
    },
    {
      question: "How long can liquid bio-fertilizers be stored?",
      answer: "Storage varies by type. Simple solutions last 5–7 days (refrigerated). Fermented extracts such as Fish Amino Acid or Panchagavya can last 3–12 months. Aerated Compost Tea should be used within 4–6 hours."
    },
    {
      question: "Can liquid bio-fertilizers fully replace chemical fertilizers?",
      answer: "For kitchen gardens, yes — bio-fertilizers can meet most nutrient needs. For commercial farming, they work best to reduce chemical dependency over 2–3 seasons while restoring soil biology."
    },
    {
      question: "Which crops benefit the most from liquid bio-fertilizers?",
      answer: "Almost all crops benefit, especially vegetables (tomato, chilli, leafy greens), fruit crops (banana, mango), flowers, and cereals (paddy, millets)."
    }
  ],

  hi: [
    {
      question: "तरल जैव-उर्वरक (लिक्विड बायो-फर्टिलाइजर) क्या हैं?",
      answer: "तरल जैव-उर्वरक ऐसे घोल हैं जो गोबर, पौधों के कचरे, ईस्ट और गुड़ को पानी में किण्वित (ferment) करके बनाए जाते हैं। इनमें जीवित मित्र सूक्ष्मजीव होते हैं जो मिट्टी की उपजाऊ शक्ति बढ़ाते हैं और पौधों को प्राकृतिक पोषण देते हैं।"
    },
    {
      question: "जैविक खाद में ईस्ट (Yeast) का उपयोग क्यों किया जाता है?",
      answer: "ईस्ट एक गुणकारी सूक्ष्मजीव है। किण्वन के दौरान यह कार्बन डाइऑक्साइड, कार्बनिक अम्ल, विटामिन-बी और एंजाइम बनाता है जो जड़ों के विकास को तेज करते हैं और मिट्टी में फास्फोरस को घुलनशील बनाते हैं।"
    },
    {
      question: "सामग्री में गुड़ का उपयोग क्यों होता है?",
      answer: "गुड़ सूक्ष्मजीवों के लिए भोजन और ऊर्जा का काम करता है। इसकी प्राकृतिक शर्करा जीवाणुओं को तेजी से गुणा करने में मदद करती है।"
    },
    {
      question: "तरल जैव-उर्वरक कितने समय तक सुरक्षित रहते हैं?",
      answer: "ईस्ट-गुड़ जैसे साधारण घोल 5-7 दिन चलते हैं। पंचगव्य और फिश अमीनो एसिड 3 से 12 महीने तक सुरक्षित रहते हैं।"
    },
    {
      question: "क्या यह रसायनिक उर्वरकों (यूरिया/डीएपी) की जगह ले सकते हैं?",
      answer: "हां, सब्जियों और बागवानी के लिए यह पूरी तरह रसायनों की जगह ले सकते हैं। व्यावसायिक खेती में यह रसायनों की खपत 50-80% तक कम कर देते हैं।"
    },
    {
      question: "किन फसलों को सबसे ज्यादा फायदा होता है?",
      answer: "सभी फसलों को फायदा होता है — विशेषकर टमाटर, मिर्च, पालक, गोभी, केला, आम, धान और फूलों के पौधे।"
    }
  ],

  te: [
    {
      question: "ద్రవ జీవ ఎరువులు అంటే ఏమిటి?",
      answer: "ద్రవ జీవ ఎరువులు అంటే ఆవు పేడ, వ్యర్థాలు, ఈస్ట్, బెల్లం నీటిలో పులియబెట్టి తయారుచేసే పోషకాల ద్రవాలు. వీటిలో నేలకు మేలు చేసే కోట్లాది జీవ బ్యాక్టీరియాలు ఉంటాయి."
    },
    {
      question: "జీవ ఎరువులలో ఈస్ట్ (Yeast) ఎందుకు వాడతారు?",
      answer: "ఈస్ట్ అనేది నేలకు మేలు చేసే సూక్ష్మజీవి. పులియబెట్టే సమయంలో ఇది విటమిన్లు, ఎంజైమ్లను విడుదల చేసి వేర్ల ఎదుగుదలను మరియు నేలలో భాస్వరం అందేలా చేస్తుంది."
    },
    {
      question: "బెల్లం ఎందుకు వాడాలి?",
      answer: "బెల్లం బ్యాక్టీరియాలకు ఆహారంగా పనిచేస్తుంది. బెల్లంలోని సహజ చక్కెరల వల్ల సూక్ష్మజీవులు వేగంగా రెట్టింపు అవుతాయి."
    },
    {
      question: "ద్రవ ఎరువులను ఎన్ని రోజులు నిల్వ ఉంచవచ్చు?",
      answer: "ఈస్ట్ ఎరువులు 5-7 రోజులు, పంచగవ్య మరియు ఫిష్ అమినో యాసిడ్ 3 నుండి 12 నెలల వరకు నిల్వ ఉంటాయి."
    },
    {
      question: "రసాయన ఎరువుల స్థానంలో వీటిని వాడవచ్చా?",
      answer: "ఇంటి తోటలు, కూరగాయలకు పూర్తిగా వాడవచ్చు. పెద్ద వ్యవసాయంలో రసాయనాల వాడకాన్ని సగానికి పైగా తగ్గించవచ్చు."
    },
    {
      question: "ఏ పంటలకు ఎక్కువ మేలు జరుగుతుంది?",
      answer: "టమాటా, మిరప, ఆకుకూరలు, వరి, అరటి, మామిడి మరియు పూల మొక్కలకు అత్యంత వేగంగా ఫలితం కనిపిస్తుంది."
    }
  ]
};

/** Helper function to retrieve recipe object for current language */
function getRecipeData(fert, lang = "en") {
  const l = fert.lang[lang] || fert.lang["en"];
  const cost = typeof fert.costLevel === "object" ? (fert.costLevel[lang] || fert.costLevel["en"]) : fert.costLevel;
  const shelf = typeof fert.shelfLife === "object" ? (fert.shelfLife[lang] || fert.shelfLife["en"]) : fert.shelfLife;
  const freq = typeof fert.applicationFrequency === "object" ? (fert.applicationFrequency[lang] || fert.applicationFrequency["en"]) : fert.applicationFrequency;
  const dosage = typeof fert.applicationDosage === "object" ? (fert.applicationDosage[lang] || fert.applicationDosage["en"]) : fert.applicationDosage;

  return {
    id: fert.id,
    icon: fert.icon,
    isMyModel: fert.isMyModel,
    baseVolume: fert.baseVolume,
    costLevel: cost,
    shelfLife: shelf,
    applicationFrequency: freq,
    applicationDosage: dosage,
    fermentationDays: fert.fermentationDays,
    name: l.name,
    tagline: l.tagline,
    ingredients: l.ingredients,
    steps: l.steps,
    benefits: l.benefits,
    suitableCrops: l.suitableCrops,
    cropCategories: l.cropCategories,
    nutrients: l.nutrients,
    precautions: l.precautions
  };
}
