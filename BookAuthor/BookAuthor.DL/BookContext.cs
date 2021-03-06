﻿using System;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using BookAuthor.CORE;
namespace BookAuthor.DL
{
    public class BookContext : DbContext, IDbContext
    {
        public BookContext() : base("ApplicationDbContext")
        {
        }

        public DbSet<Book> Books { get; set; }

        public DbSet<Author> Authors { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public ObjectResult<TEntity> SpObjectResult<TEntity>() where TEntity : class
        {
            return null;
        }
    }
}
