using System.Data.Entity;

namespace BookAuthor.DL
{
    public class BookContext : DbContext
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
    }
}
