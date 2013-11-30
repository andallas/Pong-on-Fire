var Utility = (function(Utility)
{
	Utility.isFunction = function(possibleFunction)
	{
		return (Object.prototype.toString.call(possibleFunction) === '[object Function]');
	}

	Utility.isString = function(possibleString)
	{
		return (typeof possibleString == 'string');
	}

	Utility.isArray = function(possibleArray)
	{
		if(possibleArray === undefined)
		{
			return false;
		}

		return !(possibleArray.constructor.toString().indexOf('Array') == -1);
	}

	Utility.isImage = function(possibleImage)
	{
		return Object.prototype.toString.call(possibleImage) === '[object HTMLImageElement]';
	}

	Utility.isCanvas = function(possibleCanvas)
	{
		return Object.prototype.toString.call(possibleCanvas) === '[object HTMLCanvasElement]';
	}

	Utility.isDrawable = function(possibleDrawable)
	{
		return Utility.isImage(possibleDrawable) || Utility.isCanvas(possibleDrawable);
	}

	Utility.imageToCanvas = function(image)
	{
		var canvas = document.createElement('canvas');
		canvas.src = image.src;
		canvas.width = image.width;
		canvas.height = image.height;

		var context = canvas.getContext('2d');
		context.drawImage(image, 0, 0, image.width, image.height);
		return canvas;
	}

	Utility.getColor = function(color)
	{
		if(color === undefined)
		{
			return undefined;
		}
		if(typeof color == "string")
		{
			return color;
		}
		if(color.alpha)
		{
			return "rgba(" + color.red + ", " + color.green + ", " + color.blue + ", " + color.alpha + ")";
		}
		return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
	}

	return Utility;
})
(Utility || {});