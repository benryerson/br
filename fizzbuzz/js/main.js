/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false  ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with'
						;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs	=	'abs acos acosh addcslashes addslashes ' +
						'array_change_key_case array_chunk array_combine array_count_values array_diff '+
						'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
						'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
						'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
						'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
						'array_push array_rand array_reduce array_reverse array_search array_shift '+
						'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
						'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
						'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
						'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
						'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
						'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
						'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
						'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
						'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
						'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
						'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
						'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
						'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
						'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
						'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
						'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
						'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
						'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
						'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
						'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
						'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
						'parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir '+
						'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
						'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
						'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
						'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
						'strtoupper strtr strval substr substr_compare';

		var keywords =	'abstract and array as break case catch cfunction class clone const continue declare default die do ' +
						'else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach ' +
						'function include include_once global goto if implements interface instanceof namespace new ' +
						'old_function or private protected public return require require_once static switch ' +
						'throw try use var while xor ';
		
		var constants	= '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$\w+/g,											css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'if fi then elif else for do done until while break continue case function return in eq ne ge le';
		var commands =  'alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs yes'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' }		// commands
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

