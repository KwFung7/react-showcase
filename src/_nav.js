export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Basic Buttons',
          url: '/buttons/basic-buttons',
          icon: 'icon-puzzle',
        },
        {
          name: 'Button Dropdown',
          url: '/buttons/button-dropdown',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'List Group',
      url: '/list-group',
      icon: 'icon-cursor'
    },
    {
      name: 'Tabs',
      url: '/tabs',
      icon: 'icon-cursor'
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Learn More',
      url: '/learn-more',
      icon: 'icon-notebook'
    },
    {
      name: 'Switch to Angular',
      // url: 'https://coreui.io/pro/angular/',
      icon: 'fab fa-angular',
      variant: 'danger'
    }
  ],
};
