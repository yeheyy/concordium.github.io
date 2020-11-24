module.exports = {
  topSidebar: [
    { type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'getting-started/what-is-concordium',
        'getting-started/gtu-general-transaction-unit',
        'getting-started/identities-and-accounts',
        { type: 'category',
          label: 'Transactions',
          items: [
            'getting-started/transactions/concordium-id'
          ]
        },
        'getting-started/concordiumpedia',
        'getting-started/faq'
      ],
    },
    { type: 'category'
    , label: 'How to',
      items: [
        'how-to/create-an-account',
        'how-to/send-and-receive-gtus',
        'how-to/make-shielded-transfers',
        'how-to/run-a-node',
        'how-to/become-a-baker',
        'how-to/become-a-finalizer',
        'how-to/delegate-gtus',
      ]
    },
    { type: 'category'
    , label: 'Development',
      items: [
        'development/starter-guide',
        'development/apis-and-sdks',
      ]
    },
    { type: 'link',
      label: 'Smart Contracts',
      href: 'https://concordium.gitlab.io/smart-contracts/'
    },
    { type: 'doc', id: 'community' },
    { type: 'doc', id: 'contributing' },
    { type: 'doc', id: 'style' },
  ],
};
