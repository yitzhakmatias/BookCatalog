using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookAuthor.Repositories;

namespace BookAuthor.MVCApp.Controllers
{
    public class BookApiController : ApiController
    {

        private readonly IBookRepository _bookRepository;
        private readonly IAuthorRepository _authorRepository;
        public BookApiController(IBookRepository bookRepository, IAuthorRepository authorRepository)
        {
            _bookRepository = bookRepository;
            _authorRepository = authorRepository;
        }
        [HttpGet]
        // GET api/<controller>
        public IHttpActionResult Get()
        {
             var data = new List<object>();

            foreach (var item in _authorRepository.GetAll())
            {
                data.Add(new { Id = item.Id, Name = item.Name });
            }

            return Ok(data);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}