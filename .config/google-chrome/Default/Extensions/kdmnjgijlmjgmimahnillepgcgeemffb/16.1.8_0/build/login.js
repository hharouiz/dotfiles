(()=>{var a=new URL(location.href).searchParams.get("patreon_data");a&&chrome.storage.local.set({patreon_data:a},(function(){window.close()}))})();