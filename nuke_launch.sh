source ~/.bash_aliases
if [ -z $1 ] || [ -z $2 ]; then
	echo "Usage: nuke_launch.sh $projCode (N|A|X)"
else
	SAMNuke $1 $2
fi
