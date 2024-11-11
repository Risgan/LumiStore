import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Verificar si estamos en un entorno de navegador
  if (typeof sessionStorage !== 'undefined') {
    const token = sessionStorage.getItem('token');

    if (token) {
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next(modifiedReq);
    }
  }

  // Si no hay token o no estamos en el navegador, la solicitud original sigue sin cambios
  return next(req);
};
