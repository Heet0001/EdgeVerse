import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { SectionTitle } from '../ui/SectionTitle'
import { surveyData } from '../data/content'

export function SurveySection() {
  return (
    <section id="survey" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Customer Survey"
          title="Trust in Edgeverse"
          subtitle="Results from our latest customer satisfaction survey on perception accuracy and system reliability."
          className="mb-16"
        />
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl bg-white border border-neutral-200 shadow-card p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={surveyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {surveyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    color: '#18181b',
                  }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend
                  wrapperStyle={{ color: '#52525b' }}
                  formatter={(value) => <span className="text-neutral-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-neutral-500 text-sm mt-4">
              90% of respondents agree or strongly agree that Edgeverse meets their perception requirements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
