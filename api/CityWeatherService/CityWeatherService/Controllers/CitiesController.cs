using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using CityWeatherService.Models;

namespace CityWeatherService.Controllers
{
    public class CitiesController : ApiController
    {
        private CityWeatherServiceContext db = new CityWeatherServiceContext();

        // GET: api/Cities
        public IQueryable<City> GetCities()
        {
            return db.Cities;
        }

        // POST: api/Cities
        [ResponseType(typeof(City))]
        public async Task<IHttpActionResult> PostCity(City city)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Cities.Add(city);
            await db.SaveChangesAsync();

            return Ok(db.Cities);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CityExists(int id)
        {
            return db.Cities.Count(e => e.Id == id) > 0;
        }
    }
}