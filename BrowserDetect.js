var Browser = (function () {
    "use strict";

// Variables
    var ret, isIE,
        Version,
        jscriptMap, jscriptVersion;

// Force the browser to not IE until we've checked
    isIE = false; //Not IE (for now)
// map the Javascript version used in IE to detect what version of IE we're using
    jscriptMap = {
        "5.7": "7", // IE 7
        "5.8": "8", // IE8
    };

// The detection - cc_on is true, and the javascript version
    jscriptVersion = new Function("/*@cc_on return @_jscript_version; @*/")();

//IE 11 starts at Trident/7.x
	var trident = !!navigator.userAgent.match(/Trident\/[7-9]/);

	if (trident) {
		//IE 11 doesn't know set the jscript_version so we're going to set it to get the version
		jscriptVersion = "11"; // might need updating with IE12...
	}

    if (jscriptVersion !== undefined) {
// if we have the javascript version then we're IE...
        isIE = true;
	// check if we're IE11
// Map the JS version to IE version from jscriptMap
	if (jscriptVersion <=9) {
        Version = jscriptMap[jscriptVersion];
	}else{
	// We don't need to map for anything above 9, as it matches the version
	Version = jscriptVersion;
	}
    }

// things we can return
    ret = {
        isIE: isIE,
        Version: Version,
	JSVersion: jscriptVersion
    };

// return the information asked for
    return ret;
}());

