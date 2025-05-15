import db from '../../../server/db.json';

export const getRouteDetails = (routeId) => {
    const route = db.routes.find((r) => r.id === routeId);
    const stopsRoutes = db.stops_routes.filter((sr) => sr.fk_id_route === routeId);
    const stops = stopsRoutes.map((sr) => db.stops.find((s) => s.id === sr.fk_id_stop));
    const schedules = stops.map((stop) =>
        db.schedules.filter((schedule) => schedule.fk_id_stop === stop.id)
    );
    const companies = stops.map((stop) =>
        db.companies.find((company) => company.id === stop.fk_id_company)
    );

    return { route, stops, schedules, companies };
};