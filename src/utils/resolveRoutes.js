const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // aquí permitimos que pase un  /about
};

export default resolveRoutes;