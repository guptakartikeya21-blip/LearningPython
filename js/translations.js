/**
 * ====================================================
 * FeriSmart — Multi-Language (i18n) Translations Data
 * Supports: English ('en'), Hindi ('hi'), Telugu ('te')
 * ====================================================
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_library: "Library",
    nav_compare: "Compare",
    nav_calculator: "Calculator",
    nav_faq: "FAQ",

    // Hero Section
    hero_badge: "100% Organic & Sustainable",
    hero_title_prefix: "FeriSmart",
    hero_title_suffix: "Smart Liquid Bio-Fertilizer Guide",
    hero_subtitle: "Discover how to prepare powerful homemade liquid bio-fertilizers from kitchen & farm waste. Exact ratios, step-by-step methods, and an interactive batch calculator — all in one place.",
    hero_btn_explore: "Explore Fertilizers",
    hero_btn_calc: "Batch Calculator",
    hero_stat_recipes: "Recipes",
    hero_stat_chemicals: "Chemicals",
    hero_stat_free: "Forever",
    hero_stat_zero: "Zero",
    hero_stat_always: "Free",

    // Library Section
    lib_title: "Bio-Fertilizer Library",
    lib_subtitle: "Explore homemade liquid bio-fertilizer recipes with exact ratios, preparation methods, and application guides.",
    lib_search_placeholder: "Search by name, ingredient, or nutrient…",
    lib_filter_vegetables: "🥬 Vegetables",
    lib_filter_fruits: "🍎 Fruits",
    lib_filter_flowers: "🌸 Flowers",
    lib_filter_cereals: "🌾 Cereals",
    lib_filter_n: "N – Nitrogen",
    lib_filter_p: "P – Phosphorus",
    lib_filter_k: "K – Potassium",
    lib_filter_micro: "🔬 Micro",
    lib_reset: "↻ Reset",
    lib_no_results: "No fertilizers match your search or filters. Try broadening your criteria.",
    lib_view_recipe: "View Recipe",
    lib_calculate: "Calculate",
    lib_ingredients_count: "ingredients",

    // Card Meta Labels
    meta_cost: "Cost",
    meta_shelf: "Shelf Life",
    meta_freq: "Frequency",

    // Comparison Section
    comp_title: "Fertilizer Comparison",
    comp_subtitle: "Compare all recipes side-by-side to find the best fit for your crop and budget.",
    th_fertilizer: "Fertilizer",
    th_nutrients: "Main Nutrients",
    th_fermentation: "Fermentation",
    th_cost: "Cost",
    th_shelf_life: "Shelf Life",
    th_crops: "Suitable Crops",
    th_frequency: "Frequency",

    // Calculator Section
    calc_title: "Batch Calculator",
    calc_subtitle: "Select a recipe and target volume — we'll scale all ingredient quantities for you automatically.",
    calc_label_recipe: "Choose a Recipe",
    calc_select_default: "— Select a recipe —",
    calc_label_volume: "Target Volume (Litres)",
    calc_label_slider: "Volume Slider",
    calc_scaled_header: "📦 Scaled Ingredients",
    calc_prompt: "Select a recipe above to see scaled ingredients.",
    calc_btn_copy: "Copy Recipe Summary",
    calc_copied_toast: "✅ Recipe copied to clipboard!",
    calc_copy_err_toast: "⚠️ Could not copy — please copy manually.",

    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Quick answers to common questions about liquid bio-fertilizers and sustainable farming.",

    // Modal
    modal_ingredients_for: "Ingredients (for {vol} L batch)",
    modal_th_ingredient: "Ingredient",
    modal_th_amount: "Amount",
    modal_steps_header: "👨‍🔬 Preparation Steps",
    modal_benefits_header: "✅ Benefits",
    modal_precautions_header: "⚠️ Precautions",
    modal_info_header: "📊 Quick Info",
    modal_lbl_fermentation: "Fermentation",
    modal_lbl_shelf: "Shelf Life",
    modal_lbl_dosage: "Dosage",
    modal_lbl_frequency: "Frequency",
    modal_lbl_crops: "Suitable Crops",
    modal_lbl_cost: "Cost Level",
    modal_no_ferment: "None",
    modal_days: "days",

    // Footer
    footer_desc: "An open educational platform dedicated to promoting sustainable agriculture through homemade liquid bio-fertilizers. Empowering farmers, students, and researchers with practical knowledge.",
    footer_quick_links: "Quick Links",
    footer_resources: "Resources",
    footer_all_recipes: "All Recipes",
    footer_copy: "© 2026 FeriSmart – Smart Bio-Fertilizer Guide",
    footer_quote: '"The soil is the great connector of our lives." — Wendell Berry'
  },

  hi: {
    // Navigation
    nav_home: "मुख्य पृष्ठ",
    nav_library: "लाइब्रेरी",
    nav_compare: "तुलना करें",
    nav_calculator: "कैलकुलेटर",
    nav_faq: "अक्सर पूछे जाने वाले प्रश्न",

    // Hero Section
    hero_badge: "100% जैविक और टिकाऊ कृषि",
    hero_title_prefix: "फेरीस्मार्ट",
    hero_title_suffix: "स्मार्ट तरल जैव-उर्वरक मार्गदर्शिका",
    hero_subtitle: "रसोई और खेत के कचरे से शक्तिशाली घरेलू तरल जैव-उर्वरक बनाने की विधि जानें। सटीक सामग्री अनुपात, चरण-दर-चरण तरीके और स्वचालित कैलकुलेटर — सब एक स्थान पर।",
    hero_btn_explore: "उर्वरक देखें",
    hero_btn_calc: "बैच कैलकुलेटर",
    hero_stat_recipes: "रेसिपी",
    hero_stat_chemicals: "रसायन मुक्त",
    hero_stat_free: "हमेशा के लिए",
    hero_stat_zero: "शून्य",
    hero_stat_always: "निःशुल्क",

    // Library Section
    lib_title: "जैव-उर्वरक लाइब्रेरी",
    lib_subtitle: "सटीक अनुपात, बनाने की विधि और उपयोग गाइड के साथ घरेलू तरल जैव-उर्वरक व्यंजनों की खोज करें।",
    lib_search_placeholder: "नाम, सामग्री या पोषक तत्व से खोजें…",
    lib_filter_vegetables: "🥬 सब्जियां",
    lib_filter_fruits: "🍎 फल",
    lib_filter_flowers: "🌸 फूल",
    lib_filter_cereals: "🌾 अनाज",
    lib_filter_n: "N – नाइट्रोजन",
    lib_filter_p: "P – फास्फोरस",
    lib_filter_k: "K – पोटैशियम",
    lib_filter_micro: "🔬 सूक्ष्म पोषक",
    lib_reset: "↻ रीसेट करें",
    lib_no_results: "आपकी खोज या फ़िल्टर से कोई उर्वरक मेल नहीं खाता। कृपया अपनी खोज का दायरा बढ़ाएं।",
    lib_view_recipe: "रेसिपी देखें",
    lib_calculate: "मात्रा गणना",
    lib_ingredients_count: "सामग्रियां",

    // Card Meta Labels
    meta_cost: "लागत",
    meta_shelf: "भंडारण अवधि",
    meta_freq: "प्रयोग आवृत्ति",

    // Comparison Section
    comp_title: "उर्वरक तुलना तालिका",
    comp_subtitle: "अपनी फसल और बजट के अनुसार सही उर्वरक चुनने के लिए सभी व्यंजनों की साथ-साथ तुलना करें।",
    th_fertilizer: "उर्वरक",
    th_nutrients: "मुख्य पोषक तत्व",
    th_fermentation: "किण्वन समय",
    th_cost: "लागत स्तर",
    th_shelf_life: "भंडारण अवधि",
    th_crops: "उपयुक्त फसलें",
    th_frequency: "छिड़काव आवृत्ति",

    // Calculator Section
    calc_title: "मात्रा (बैच) कैलकुलेटर",
    calc_subtitle: "एक रेसिपी और आवश्यक लीटर चुनें — हम आपके लिए सभी सामग्रियों की मात्रा का स्वतः हिसाब लगाएंगे।",
    calc_label_recipe: "रेसिपी चुनें",
    calc_select_default: "— एक रेसिपी चुनें —",
    calc_label_volume: "लक्षित मात्रा (लीटर)",
    calc_label_slider: "मात्रा स्लाइडर",
    calc_scaled_header: "📦 आवश्यक सामग्री की मात्रा",
    calc_prompt: "सामग्रियों का हिसाब देखने के लिए ऊपर से एक रेसिपी चुनें।",
    calc_btn_copy: "रेसिपी कॉपी करें",
    calc_copied_toast: "✅ रेसिपी क्लिपबोर्ड पर कॉपी हो गई!",
    calc_copy_err_toast: "⚠️ कॉपी नहीं हो सका — कृपया मैन्युअल रूप से कॉपी करें।",

    // FAQ Section
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_subtitle: "तरल जैव-उर्वरक और टिकाऊ खेती के बारे में आम सवालों के त्वरित जवाब।",

    // Modal
    modal_ingredients_for: "आवश्यक सामग्री ({vol} लीटर बैच के लिए)",
    modal_th_ingredient: "सामग्री",
    modal_th_amount: "मात्रा",
    modal_steps_header: "👨‍🔬 बनाने की चरण-दर-चरण विधि",
    modal_benefits_header: "✅ प्रमुख लाभ",
    modal_precautions_header: "⚠️ सावधानियां",
    modal_info_header: "📊 त्वरित जानकारी",
    modal_lbl_fermentation: "किण्वन समय",
    modal_lbl_shelf: "भंडारण समय",
    modal_lbl_dosage: "प्रयोग मात्रा",
    modal_lbl_frequency: "आवृत्ति",
    modal_lbl_crops: "उपयुक्त फसलें",
    modal_lbl_cost: "लागत स्तर",
    modal_no_ferment: "कोई किण्वन नहीं",
    modal_days: "दिन",

    // Footer
    footer_desc: "घरेलू तरल जैव-उर्वरकों के माध्यम से टिकाऊ कृषि को बढ़ावा देने के लिए समर्पित एक खुला शैक्षणिक मंच।",
    footer_quick_links: "त्वरित लिंक",
    footer_resources: "संसाधन",
    footer_all_recipes: "सभी रेसिपी",
    footer_copy: "© 2026 फेरीस्मार्ट – स्मार्ट जैव-उर्वरक मार्गदर्शिका",
    footer_quote: '"मिट्टी हमारे जीवन को जोड़ने वाली सबसे बड़ी कड़ी है।" — वेंडेल बेरी'
  },

  te: {
    // Navigation
    nav_home: "హోమ్",
    nav_library: "లైబ్రరీ",
    nav_compare: "పోల్చండి",
    nav_calculator: "క్యాలిక్యులేటర్",
    nav_faq: "తరచుగా అడిగే ప్రశ్నలు",

    // Hero Section
    hero_badge: "100% సేంద్రీయ & సుస్థిర వ్యవసాయం",
    hero_title_prefix: "ఫెరిస్మార్ట్",
    hero_title_suffix: "స్మార్ట్ ద్రవ జీవ ఎరువుల మార్గదర్శి",
    hero_subtitle: "ఇంటి మరియు పొలం వ్యర్థాల నుండి శక్తివంతమైన ద్రవ జీవ ఎరువులను ఎలా తయారు చేసుకోవాలో తెలుసుకోండి. కచ్చితమైన పదార్థాల నిష్పత్తులు, పద్ధతులు మరియు క్యాలిక్యులేటర్ — అన్నీ ఒకే చోట.",
    hero_btn_explore: "ఎరువులను చూడండి",
    hero_btn_calc: "బ్యాచ్ క్యాలిక్యులేటర్",
    hero_stat_recipes: "వంటకాలు",
    hero_stat_chemicals: "రసాయనాలు",
    hero_stat_free: "ఎల్లప్పుడూ",
    hero_stat_zero: "సున్నా",
    hero_stat_always: "ఉచితం",

    // Library Section
    lib_title: "జీవ ఎరువుల లైబ్రరీ",
    lib_subtitle: "కచ్చితమైన ప్రమాణాలు, తయారీ విధానాలు మరియు వినియోగ మార్గదర్శకాలతో ఇంటి ద్రవ జీవ ఎరువుల వివరాలను తెలుసుకోండి.",
    lib_search_placeholder: "పేరు, పదార్థం లేదా పోషకం ద్వారా శోధించండి…",
    lib_filter_vegetables: "🥬 కూరగాయలు",
    lib_filter_fruits: "🍎 పండ్లు",
    lib_filter_flowers: "🌸 పూలు",
    lib_filter_cereals: "🌾 ధాన్యాలు",
    lib_filter_n: "N – నత్రజని (నైట్రోజన్)",
    lib_filter_p: "P – భాస్వరం (ఫాస్ఫరస్)",
    lib_filter_k: "K – పొటాషియం",
    lib_filter_micro: "🔬 సూక్ష్మ పోషకాలు",
    lib_reset: "↻ రీసెట్",
    lib_no_results: "మీ శోధనకు తగిన ఎరువులు లభించలేదు. దయచేసి శోధన పదాన్ని మార్చండి.",
    lib_view_recipe: "విధానం చూడండి",
    lib_calculate: "లెక్కించండి",
    lib_ingredients_count: "పదార్థాలు",

    // Card Meta Labels
    meta_cost: "ఖర్చు",
    meta_shelf: "నిల్వ కాలం",
    meta_freq: "వాడే వ్యవధి",

    // Comparison Section
    comp_title: "ఎరువుల పోలిక పట్టిక",
    comp_subtitle: "మీ పంట మరియు బడ్జెట్‌కు తగిన ఎరువును ఎంచుకోవడానికి అన్నీ ఒకే చోట పోల్చి చూడండి.",
    th_fertilizer: "జీవ ఎరువు",
    th_nutrients: "ముఖ్య పోషకాలు",
    th_fermentation: "పులియబెట్టే సమయం",
    th_cost: "ఖర్చు స్థాయి",
    th_shelf_life: "నిల్వ కాలం",
    th_crops: "తగిన పంటలు",
    th_frequency: "వాడే వ్యవధి",

    // Calculator Section
    calc_title: "మాత్ర (బ్యాచ్) క్యాలిక్యులేటర్",
    calc_subtitle: "ఎరువు మరియు కావలసిన లీటర్ల పరిమాణాన్ని ఎంచుకోండి — కావలసిన పదార్థాల పరిమాణాన్ని మేము ఆటోమేటిక్‌గా లెక్కిస్తాము.",
    calc_label_recipe: "ఎరువును ఎంచుకోండి",
    calc_select_default: "— ఒక ఎరువును ఎంచుకోండి —",
    calc_label_volume: "కావలసిన పరిమాణం (లీటర్లలో)",
    calc_label_slider: "పరిమాణం స్లైడర్",
    calc_scaled_header: "📦 కావలసిన పదార్థాల పరిమాణం",
    calc_prompt: "పదార్థాల వివరాలు చూడటానికి పైన ఒక ఎరువును ఎంచుకోండి.",
    calc_btn_copy: "వివరాలు కాపీ చేయండి",
    calc_copied_toast: "✅ వివరాలు కాపీ అయ్యాయి!",
    calc_copy_err_toast: "⚠️ కాపీ చేయడం వీలుపడలేదు — దయచేసి మ్యాన్యువల్‌గా కాపీ చేయండి.",

    // FAQ Section
    faq_title: "తరచుగా అడిగే ప్రశ్నలు",
    faq_subtitle: "ద్రవ జీవ ఎరువులు మరియు సేంద్రీయ వ్యవసాయంపై సాధారణ ప్రశ్నలకు సమాధానాలు.",

    // Modal
    modal_ingredients_for: "కావలసిన పదార్థాలు ({vol} లీటర్ల బ్యాచ్ కోసం)",
    modal_th_ingredient: "పదార్థం",
    modal_th_amount: "పరిమాణం",
    modal_steps_header: "👨‍🔬 తయారీ విధానం",
    modal_benefits_header: "✅ ప్రయోజనాలు",
    modal_precautions_header: "⚠️ జాగ్రత్తలు",
    modal_info_header: "📊 వివరాలు",
    modal_lbl_fermentation: "పులియబెట్టే సమయం",
    modal_lbl_shelf: "నిల్వ సమయం",
    modal_lbl_dosage: "వాడే మోతాదు",
    modal_lbl_frequency: "వ్యవధి",
    modal_lbl_crops: "తగిన పంటలు",
    modal_lbl_cost: "ఖర్చు స్థాయి",
    modal_no_ferment: "అవసరం లేదు",
    modal_days: "రోజులు",

    // Footer
    footer_desc: "ద్రవ జీవ ఎరువుల ద్వారా సుస్థిర సేంద్రీయ వ్యవసాయాన్ని ప్రోత్సహించడానికి అంకితమైన విద్యా వేదిక.",
    footer_quick_links: "ముఖ్య లింకులు",
    footer_resources: "వనరులు",
    footer_all_recipes: "అన్ని రకాలు",
    footer_copy: "© 2026 ఫెరిస్మార్ట్ – స్మార్ట్ జీవ ఎరువుల మార్గదర్శి",
    footer_quote: '"నేల మన జీవితాలను అనుసంధానించే గొప్ప వంతెన." — వెండెల్ బెర్రీ'
  }
};
