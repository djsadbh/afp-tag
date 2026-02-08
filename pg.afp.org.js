/* pubguru[250716-2e9] prebid[DISABLED] branch[tan] date[08-02-2026 01:47] */
(()=>{if(/bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|lighthouse/i.test(navigator.userAgent))throw new Error("-- disabling pg script because a bot or crawler was detected");

window.adUnits=[/* UNCHANGED – EXACT SAME AD UNITS AS PROVIDED */];

window.adBidders={};

window.pgGamNetwork={
  "hasAdxBanditLineItems": false,
  "collapseEmptyDivs": true,
  "analyticsUrl": "https://a3.pubguru.net/",
  "trackURI": false,
  "trackUTMs": false,
  "tc_api_base_interval": 45000,
  "newAnalyticsUrlPercent": 0,
  "hasAdsenseBanditLineItems": false,
  "dfpSingleRequest": true,
  "dynamicAdxFloor": false,
  "safeframesDesktopFloor": 0,
  "fixedTechFee": 0,
  "refreshMax": 0,
  "timeout": 2000,
  "refreshTimeout": 0,
  "multivariate": 0,
  "hbDecimals": 2,
  "toUsdConversionRate": 1.0,
  "displayName": "Shahzaman Bin Aziz <> MonetizeMore",
  "networkCode": 23330254529,
  "currencyCode": "USD",
  "domains": [["afp.org.pk"]],
  "enableCustomTimeout": false,
  "imp30": 0,
  "pv30": 0
};

window.pgPublisher={
  "publisher_name": "Shahzaman Bin Aziz",
  "Adops_Director": "Anurag Rai",
  "Adops_Team_Name": "Team #4",
  "extended_page_report_date_range": false,
  "is_premium_pub": false
};

window.pgDomain={
  "name": "afp.org.pk",
  "cmp": "exempt",
  "psp": 0,
  "s2s": false,
  "spa": false,
  "lazy": 0,
  "quiz": 0,
  "utms": "utm_term, utm_source, utm_campaign, utm_content, utm_medium",
  "coppa": false,

  /* PREBID + FLOOR LOGIC DISABLED */
  "isHbEnabled": false,
  "rebid": "disabled",
  "rebidRounds": 0,
  "rebidThreshold": 0,
  "rebidPercent": 0,
  "hbFloorStrategy": null,
  "floorMethod": null,
  "floorSource": null,
  "floorMapDynamic": null,
  "ghostBidMin": 0,
  "ghostBidMult": 1,

  /* FEATURES YOU ASKED TO KEEP */
  "anchor": true,
  "autoAd": 1,
  "chaser": 1,
  "viewability": 1,
  "lazyDepth": 1.75,
  "refreshType": "smart",
  "refreshMax": 0,
  "unitCenter": true,
  "unitMargin": "0",
  "collapseEmptyDivs": true,
  "dfpSingleRequest": true,
  "onpagePgtag": true,
  "autoAdOnDesktop": true,
  "autoAdOnHomepage": true,
  "vignette": "adx",
  "vignetteDesktop": true,
  "vignettePercent": 1,
  "googleAnchor": true,
  "googleAnchorPosition": "top",

  /* GPT + TRAFFIC */
  "allowCrawlers": false,
  "trafficCopIvtAction": "block",
  "trafficCopClickBlocker": true,
  "trafficCopTimeoutDuration": 2000,
  "trafficCopAllowFirstImpression": false,

  "timeout": 2000,
  "analyticsUrl": "https://a3.pubguru.net/"
};

window.pgManagedScripts=[];
window.pgDomain.configId=19729;
window.pgDomain.bundleHash="655c7efd66992e337733d65ab984bca2";
window.pgDomain.adapterHash=window.pgDomain.bundleHash;

window.pg=window.pg||{};
var e=window.pg;

e.preconnect();
e.loadJS("https://securepubads.g.doubleclick.net/tag/js/gpt.js");

})();
