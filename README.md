# Mini FlashCards for the jQuery library

The FlashCards can be used for unobtrusive notifications in web pages. The implementation is very basic, depends on [jQuery](http://jquery.com/) and is thus very small in size.

## Usage

To use the FlashCards, include flashcards.js and flashcards.css to your web page. If you use [SASS](http://sass-lang.com) and/or [Compass](http://compass-style.org/), you can use flashcards.scss directly.

Note that the FlashCards do depend on [jQuery](http://jquery.com/), so make sure you have jQuery included in your web page prior to including flashcards.js.

After including the aforementioned assets, you can use the following code to create a brief flash notification:

	flash("Logged in successfully!");

The flash message, which appears on the screen, will soon fade out and will also fade out immediately if clicked.

If you wish to customize the duration for which the flash notification remains visible, use the following syntax:

	flash({'message': "Logged in successfully!", 'visibleFor': 5000});

Note that the duration, specified by the `visibleFor` parameter is in milliseconds. Feel free to customize the included stylesheet to suit your needs.

## Bugs and feature-requests

Please use the [Github issue tracker](http://github.com/mitio/js-flashcards/issues) for this project.

## Patches

Please use the "Send Pull Request" functionality of Github, if you wish to send me some patches.

## Credits

Thanks to the great [jQuery](http://jquery.com/) library.

## License

Released under the MIT license.
