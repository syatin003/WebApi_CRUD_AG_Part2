﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace testing.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           return View();
        }

        public ActionResult User()
        {
          return View();
        }

        public ActionResult Admin()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
