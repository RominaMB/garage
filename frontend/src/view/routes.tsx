import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/persons',
    loader: () =>
      import('src/view/persons/list/PersonsListPage'),
    permissionRequired: permissions.personsRead,
    exact: true,
  },
  {
    path: '/persons/new',
    loader: () =>
      import('src/view/persons/form/PersonsFormPage'),
    permissionRequired: permissions.personsCreate,
    exact: true,
  },
  {
    path: '/persons/importer',
    loader: () =>
      import(
        'src/view/persons/importer/PersonsImporterPage'
      ),
    permissionRequired: permissions.personsImport,
    exact: true,
  },
  {
    path: '/persons/:id/edit',
    loader: () =>
      import('src/view/persons/form/PersonsFormPage'),
    permissionRequired: permissions.personsEdit,
    exact: true,
  },
  {
    path: '/persons/:id',
    loader: () =>
      import('src/view/persons/view/PersonsViewPage'),
    permissionRequired: permissions.personsRead,
    exact: true,
  },

  {
    path: '/products',
    loader: () =>
      import('src/view/products/list/ProductsListPage'),
    permissionRequired: permissions.productsRead,
    exact: true,
  },
  {
    path: '/products/new',
    loader: () =>
      import('src/view/products/form/ProductsFormPage'),
    permissionRequired: permissions.productsCreate,
    exact: true,
  },
  {
    path: '/products/importer',
    loader: () =>
      import(
        'src/view/products/importer/ProductsImporterPage'
      ),
    permissionRequired: permissions.productsImport,
    exact: true,
  },
  {
    path: '/products/:id/edit',
    loader: () =>
      import('src/view/products/form/ProductsFormPage'),
    permissionRequired: permissions.productsEdit,
    exact: true,
  },
  {
    path: '/products/:id',
    loader: () =>
      import('src/view/products/view/ProductsViewPage'),
    permissionRequired: permissions.productsRead,
    exact: true,
  },

  {
    path: '/categories',
    loader: () =>
      import('src/view/categories/list/CategoriesListPage'),
    permissionRequired: permissions.categoriesRead,
    exact: true,
  },
  {
    path: '/categories/new',
    loader: () =>
      import('src/view/categories/form/CategoriesFormPage'),
    permissionRequired: permissions.categoriesCreate,
    exact: true,
  },
  {
    path: '/categories/importer',
    loader: () =>
      import(
        'src/view/categories/importer/CategoriesImporterPage'
      ),
    permissionRequired: permissions.categoriesImport,
    exact: true,
  },
  {
    path: '/categories/:id/edit',
    loader: () =>
      import('src/view/categories/form/CategoriesFormPage'),
    permissionRequired: permissions.categoriesEdit,
    exact: true,
  },
  {
    path: '/categories/:id',
    loader: () =>
      import('src/view/categories/view/CategoriesViewPage'),
    permissionRequired: permissions.categoriesRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
