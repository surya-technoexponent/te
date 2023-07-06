const leftMarquee = document.getElementById('left-marquee')

		const getRssDataForLeftMarquee = async () => {
			let leftMarqueeContent = ''
			// await fetch("https://www.rt.com/rss/news/").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
			// 	const items = data.querySelectorAll("item");
			// 	let html = ``;
			// 	items.forEach(el => {
			// 		html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">${el.querySelector("link").innerHTML}</a></p>`
			// 	})
			// 	leftMarqueeContent += html
			// })
			// await fetch("https://www.infowars.com/rss.xml").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
			// 	const items = data.querySelectorAll("item");
			// 	let html = ``;
			// 	items.forEach(el => {
			// 		html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">${el.querySelector("link").innerHTML}</a></p>`
			// 	})
			// 	leftMarqueeContent += html
			// })
			// await fetch("https://www.naturalnews.com/rss.xml").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
			// 	const items = data.querySelectorAll("item");
			// 	let html = ``;
			// 	items.forEach(el => {
			// 		html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">${el.querySelector("link").innerHTML}</a></p>`
			// 	})
			// 	leftMarqueeContent += html
			// })
			// await fetch("https://www.coindesk.com/arc/outboundfeeds/rss/").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
			// 	const items = data.querySelectorAll("item");
			// 	let html = ``;
			// 	items.forEach(el => {
			// 		html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">${el.querySelector("link").innerHTML}</a></p>`
			// 	})
			// 	leftMarqueeContent += html
			// })
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category}`
				let html = `<h2>${news}</h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100727362").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15837362").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10001147").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=19854910").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000108").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000115").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10001054").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=19836768").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			await fetch("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20409666").then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
				const items = data.querySelectorAll("item");
				const categoryLink = data.querySelectorAll("link")[1].innerHTML
				const category = data.querySelector("title").innerHTML
				const news = `${category} (${categoryLink})`
				let html = `<h2><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${news}</a></h2>`;

				items.forEach(el => {
					html += `<p>${el.querySelector("title").innerHTML}<br/><a style="font-size: 16px" href="${categoryLink}" target="_blank" rel="noopener">${categoryLink}</a></p>`
				})
				leftMarqueeContent += html
			})
			if (leftMarqueeContent) {
				return leftMarqueeContent
			} else {
				throw "Can't get rss"
			}
		}
		getRssDataForLeftMarquee().then(res => {
			leftMarquee.innerHTML = `<marquee  width="100%" direction="up" height="100%" Scrollamount="4">${res}</marquee>`
		}).catch(err => console.log(err))