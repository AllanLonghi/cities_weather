using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CityWeatherService.Models
{
    public class City
    {
        public int Id { get; set; }
        [Required]
        public String Name { get; set; }
        [Required]
        public String CountryCode { get; set; }
    }
}