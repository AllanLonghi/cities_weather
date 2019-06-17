using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CityWeatherService.Models
{
    public class City
    {
        public int Id { get; set; }

        [Required]
        [Index("IX_CityCountryCode", 1, IsUnique = true)]
        public String Name { get; set; }

        [Required]
        [Index("IX_CityCountryCode", 2, IsUnique = true)]
        public String CountryCode { get; set; }
    }
}