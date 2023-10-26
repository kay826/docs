module.exports = {
    themeConfig: {
      logo: '/assets/img/bendakeji.png',    
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          items: [
            { text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
              { text: '谷歌', link: 'https://google.com' },
            ] },
            { text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
              { text: '谷歌', link: 'https://google.com' },
            ] }
          ]         
        },
        {
          text: 'dajia',
          items: [
            { text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
              { text: '谷歌', link: 'https://google.com' },
            ] },
            { text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/guide/' },
              { text: '谷歌', link: 'https://google.com' },
            ] }
          ]
        }
      ]
    }
  }