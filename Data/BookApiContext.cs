using Microsoft.EntityFrameworkCore;

namespace Books.Data
{
    public class BookApiContext : DbContext
    {
        
        public BookApiContext(DbContextOptions<BookApiContext> options) : base(options)
        {
            
        }

        public DbSet<Books.Models.BookModel> BookModel { get; set; } 
    }
}
