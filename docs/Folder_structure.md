pledge-portal/
├── .cursor
│   └── rules
│       ├── 001_project.mdc
│       ├── 002_architecture.mdc
│       ├── 003_frontend_patterns.mdc
│       └── 004_domain_rules.mdc
├── .env
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── FOLDER_STRUCTURE.md
├── README.md
├── components.json
├── docs
│   ├── Api_contracts.md
│   ├── Architectural_decisions.md
│   ├── Definition_of_done.md
│   ├── Design_systems.md
│   ├── Domain_model.md
│   ├── Folder_conventions.md
│   ├── Project_rules.md
│   ├── Role_matrix.md
│   ├── Testing_strategy.md
│   └── Workflows.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── (admin)
│   │   ├── (district)
│   │   ├── (promoter)
│   │   ├── (public)
│   │   ├── (state)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── shared
│   │   └── ui
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── inputFields
│   │       │   ├── input
│   │       │   │   └── input.tsx
│   │       │   ├── input-group
│   │       │   │   └── input-group.tsx
│   │       │   ├── label
│   │       │   │   └── label.tsx
│   │       │   ├── select
│   │       │   │   └── select.tsx
│   │       │   └── textarea
│   │       │       └── textarea.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       └── tabs.tsx
│   ├── config
│   │   ├── app.ts
│   │   ├── env.ts
│   │   ├── index.ts
│   │   └── query.ts
│   ├── constants
│   │   ├── enums.ts
│   │   ├── index.ts
│   │   ├── permissions.ts
│   │   ├── roles.ts
│   │   └── routes.ts
│   ├── core
│   │   ├── http.ts
│   │   ├── i18n
│   │   │   ├── en
│   │   │   │   └── common.json
│   │   │   └── hi
│   │   │       └── common.json
│   │   └── security.ts
│   ├── features
│   │   ├── admin
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── admin.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── admin.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── admin.types.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── admin.utils.ts
│   │   │       └── index.ts
│   │   ├── application
│   │   │   ├── components
│   │   │   │   ├── application-form.tsx
│   │   │   │   ├── document-uploader.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   ├── index.ts
│   │   │   │   ├── use-application-mutation.ts
│   │   │   │   └── use-get-application.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── application.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── application.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── application.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── types.ts
│   │   │   └── utils
│   │   │       ├── application.utils.ts
│   │   │       └── index.ts
│   │   ├── auth
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── auth.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── auth.types.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── auth.utils.ts
│   │   │       └── index.ts
│   │   ├── committee
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── committee.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── committee.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── committee.types.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── committee.utils.ts
│   │   │       └── index.ts
│   │   ├── dms
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── dms.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── dms.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── dms.types.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── dms.utils.ts
│   │   │       └── index.ts
│   │   ├── finance
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── finance.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   ├── finance.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── finance.types.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── finance.utils.ts
│   │   │       └── index.ts
│   │   ├── inspection
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── index.ts
│   │   │   │   └── inspection.schema.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   └── inspection.service.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── inspection.types.ts
│   │   │   └── utils
│   │   │       ├── index.ts
│   │   │       └── inspection.utils.ts
│   │   ├── notifications
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── index.ts
│   │   │   │   └── notifications.schema.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   └── notifications.service.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── notifications.types.ts
│   │   │   └── utils
│   │   │       ├── index.ts
│   │   │       └── notifications.utils.ts
│   │   ├── plots
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── index.ts
│   │   │   │   └── plots.schema.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   └── plots.service.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── plots.types.ts
│   │   │   └── utils
│   │   │       ├── index.ts
│   │   │       └── plots.utils.ts
│   │   ├── pre-application
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── index.ts
│   │   │   │   └── pre-application.schema.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   └── pre-application.service.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── pre-application.types.ts
│   │   │   └── utils
│   │   │       ├── index.ts
│   │   │       └── pre-application.utils.ts
│   │   ├── reports
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── queries
│   │   │   │   └── index.ts
│   │   │   ├── schemas
│   │   │   │   ├── index.ts
│   │   │   │   └── reports.schema.ts
│   │   │   ├── services
│   │   │   │   ├── index.ts
│   │   │   │   └── reports.service.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── reports.types.ts
│   │   │   └── utils
│   │   │       ├── index.ts
│   │   │       └── reports.utils.ts
│   │   └── workflow
│   │       ├── components
│   │       │   └── index.ts
│   │       ├── hooks
│   │       │   └── index.ts
│   │       ├── index.ts
│   │       ├── queries
│   │       │   └── index.ts
│   │       ├── schemas
│   │       │   ├── index.ts
│   │       │   └── workflow.schema.ts
│   │       ├── services
│   │       │   ├── index.ts
│   │       │   └── workflow.service.ts
│   │       ├── types
│   │       │   ├── index.ts
│   │       │   └── workflow.types.ts
│   │       └── utils
│   │           ├── index.ts
│   │           └── workflow.utils.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useDebounce.ts
│   │   └── useMediaQuery.ts
│   ├── lib
│   │   ├── axios.ts
│   │   ├── i18n.ts
│   │   └── utils.ts
│   ├── middleware.ts
│   ├── providers
│   │   ├── auth-provider.tsx
│   │   ├── query-provider.tsx
│   │   └── theme-provider.tsx
│   ├── schemas
│   │   ├── common.schema.ts
│   │   ├── index.ts
│   │   └── pagination.schema.ts
│   ├── server
│   │   ├── auth
│   │   │   └── index.ts
│   │   ├── permissions
│   │   │   └── index.ts
│   │   └── session
│   │       └── index.ts
│   ├── store
│   │   ├── auth.store.ts
│   │   ├── index.ts
│   │   ├── sidebar.store.ts
│   │   ├── theme.store.ts
│   │   └── ui.store.ts
│   ├── styles
│   │   └── theme.css
│   ├── test
│   │   ├── setup.ts
│   │   └── utils.tsx
│   └── types
│       ├── api.ts
│       ├── common.ts
│       └── index.ts
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo