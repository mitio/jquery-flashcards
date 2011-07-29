/**
 * Nice-looking floated flash messages
 * More on https://github.com/mitio/jquery-flashcards
 */
var freeFlashCards = [];

function flash(o) {
	if (typeof o === 'string') {
		o = {message: o};
	}

	o = $.extend({
		message: '',
		visibleFor: 2000 // in milliseconds
	}, o || {});

	var $card = freeFlashCards.pop();
	if (!$card) {
		$card = $('<div/>')
			.addClass('fc-wrapper')
			.append('<div class="fc-background"/><div class="fc-content"/>')
			.hide()
			.appendTo('body');

		$card.click(function () {
			$card.fadeOut('fast', function () {
				freeFlashCards.push($card);
			});
		});
	}

	// calculate the needed width/height of the flashcard
	$card.addClass('fc-positioning').find('.fc-content').html(o.message);
	var w = $card.width(),
		h = $card.height();

	// position and display it
	$card.css({
		'top': ($(window).height() - h) / 2,
		'left': ($(window).width() - w) / 2,
		'width': w,
		'height': h
	}).removeClass('fc-positioning').show();

	// fade out after o.visibleFor ms
	setTimeout(function () {
		$card.trigger('click');
	}, o.visibleFor);
}
