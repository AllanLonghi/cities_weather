namespace CityWeatherService.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using CityWeatherService.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<CityWeatherService.Models.CityWeatherServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(CityWeatherService.Models.CityWeatherServiceContext context)
        {
            context.Cities.AddOrUpdate(
                c => c.Name,
                new City { Id = 1,Name = "Blumenau", CountryCode="BR"},
                new City { Id = 2, Name = "Florianopolis", CountryCode = "BR" },
                new City { Id = 3, Name = "Curitibanos", CountryCode = "BR" }
            );
        }
    }
}
