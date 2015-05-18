/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval(start, end){
	this.start = start;
	this.end = end;
};

var merge = function(intervals) {
	intervals.sort(function(a,b){
		return a.start-b.start;
	});
	var result = [];
	var i;
	var start=-9999;
	var end=-9999;
	for(i=0;i<intervals.length;i++){
		if(start === -9999){
			start=intervals[i].start;
			end=intervals[i].end;
		}
		else{
			if(intervals[i].start <= end){
				end = Math.max(end,intervals[i].end);
			}
			else{
				result.push(new Interval(start,end));
				start = intervals[i].start;
				end = intervals[i].end;
			}
		}
	}
	if(start!==-9999){
		result.push(new Interval(start,end));
	}
	
	return result;
};