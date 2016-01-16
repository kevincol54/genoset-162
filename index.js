var gql = require('gql')

module.exports = function (dna) {
  var queries = [
    gql.has('rs1799853', 'T'),
    gql.has('rs1057910', 'C'),
    gql.has('rs56165452', 'C'),
    gql.has('rs28371686', 'G'),
    gql.has('rs9332131', '-'),
    gql.has('rs7900194', 'A'),
    gql.has('rs2256871', 'C'),
    gql.has('rs9332130', 'G'),
    gql.has('rs28371685', 'T'),
    gql.has('rs9332239', 'T'),
    gql.has('rs1057909', 'G'),
    gql.has('rs2017319', 'T'),
    gql.exact('rs1799853', 'TT'),
    gql.exact('rs1057910', 'CC'),
    gql.exact('rs56165452', 'CC'),
    gql.exact('rs28371686', 'GG'),
    gql.exact('rs9332131', '--'),
    gql.exact('rs7900194', 'AA'),
    gql.exact('rs2256871', 'CC'),
    gql.exact('rs9332130', 'GG'),
    gql.exact('rs28371685', 'TT'),
    gql.exact('rs9332239', 'TT'),
    gql.exact('rs1057909', 'GG'),
    gql.exact('rs2017319', 'TT')
  ]

  var results = queries.map(function (query) {
    return query(dna)
  })

  function countArray (array) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
        count++
      }
    }
    return count
  }

  return countArray(results) >= 2
}
