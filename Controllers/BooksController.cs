using Azure;
using Books.Data;
using Books.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Books.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookApiContext _context;
        public BooksController(BookApiContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<BookModel>>> GetBookModel()
        {
            if (_context.BookModel == null)
            {
                return NotFound();
            }

            return await _context.BookModel.ToListAsync();

        }
    
        [HttpGet("{id}")]

        public async Task<ActionResult<BookModel>> GetBookModel(int id)
        {
            if (_context.BookModel == null)
            {
                return NotFound();
            }

            var bookModel = await _context.BookModel.FindAsync(id);

            if (bookModel == null)
            {
                return NotFound();
            }

            return bookModel;

            }

        [HttpPost]

        public async Task<BookModel> AddBookAsync(BookModel bookModel)
        {
           _context.BookModel.Add(bookModel);
            await _context.SaveChangesAsync();
            return bookModel;
           
        }

        [HttpPatch]
        [Route("UpDateBook/{id}")]

        public async Task<BookModel> UpdateBookPatchAsync(BookModel bookModel)
        {
            _context.Entry(bookModel).State = EntityState.Modified;
            await _context.SaveChangesAsync();
           
            return bookModel;
        }

        [HttpDelete]
        [Route("DeleteBook/{id}")]

        public bool DeleteBook(int id)
        {
            bool a = false;
            var book = _context.BookModel.Find(id);
            if (book != null)
            {
                a = true;
                _context.Entry(book).State = EntityState.Deleted;
                _context.SaveChangesAsync();
            }
            else
            {
                a = false;
            }
            return a;

        }

    } 

    } 